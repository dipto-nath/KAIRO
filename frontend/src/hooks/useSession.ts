"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import type {
  SessionState,
  VoiceState,
  AgentState,
  TranscriptEntry,
  ToolCall,
  ActivityStep,
  ContextConstraint,
  Product,
  Reservation,
  SafetyState,
} from "@/types";
import { generateId } from "@/lib/utils";
import { api, convertBackendProduct, convertBackendReservation } from "@/lib/api";

// Audio processing utilities
const TARGET_SAMPLE_RATE = 16000;
const CHUNK_INTERVAL_MS = 250;

/**
 * Resample audio buffer from source sample rate to target sample rate
 */
async function resampleAudioBuffer(audioBuffer: AudioBuffer, targetSampleRate: number): Promise<AudioBuffer> {
  const sourceSampleRate = audioBuffer.sampleRate;
  if (sourceSampleRate === targetSampleRate) {
    return audioBuffer;
  }

  const offlineContext = new OfflineAudioContext(
    audioBuffer.numberOfChannels,
    Math.ceil(audioBuffer.duration * targetSampleRate),
    targetSampleRate
  );

  const source = offlineContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(offlineContext.destination);
  source.start(0);

  return offlineContext.startRendering();
}

/**
 * Convert AudioBuffer to 16-bit PCM bytes
 */
function audioBufferToPcm16(audioBuffer: AudioBuffer): Uint8Array {
  const numChannels = audioBuffer.numberOfChannels;
  const length = audioBuffer.length;
  const result = new Uint8Array(length * numChannels * 2); // 16-bit = 2 bytes per sample
  let offset = 0;

  for (let i = 0; i < length; i++) {
    for (let channel = 0; channel < numChannels; channel++) {
      const sample = Math.max(-1, Math.min(1, audioBuffer.getChannelData(channel)[i]));
      const int16 = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
      result[offset++] = int16 & 0xff;
      result[offset++] = (int16 >> 8) & 0xff;
    }
  }

  return result;
}

/**
 * Convert WebM/Opus blob to PCM16 at target sample rate
 */
async function convertWebMToPcm16(webmBlob: Blob, targetSampleRate: number = TARGET_SAMPLE_RATE): Promise<Uint8Array> {
  const arrayBuffer = await webmBlob.arrayBuffer();
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: targetSampleRate });
  
  // Resume context if suspended
  if (audioContext.state === 'suspended') {
    await audioContext.resume();
  }

  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  const resampledBuffer = await resampleAudioBuffer(audioBuffer, targetSampleRate);
  const pcm16 = audioBufferToPcm16(resampledBuffer);
  
  await audioContext.close();
  return pcm16;
}

// ── Initial State ──────────────────────────────────────────

function createInitialState(): SessionState {
  return {
    id: generateId(),
    status: "idle",
    agentState: "IDLE",
    transcript: [],
    constraints: [],
    activities: [],
    toolHistory: [],
    products: [],
    selectedProduct: undefined,
    inventory: undefined,
    reservation: undefined,
    safetyState: undefined,
    error: undefined,
    metrics: {
      startedAt: new Date(),
      responseLatencyMs: 0,
      toolCallCount: 0,
      taskCompletionRate: 0,
      sessionDurationSeconds: 0,
    },
  };
}

// ── Hook ───────────────────────────────────────────────────

export function useSession() {
  const [session, setSession] = useState<SessionState>(createInitialState);
  const eventSourceRef = useRef<EventSource | null>(null);
  const [backendSessionId, setBackendSessionId] = useState<string | null>(null);
  const voiceWsRef = useRef<WebSocket | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);

  const update = useCallback(
    (partial: Partial<SessionState>) =>
      setSession((prev) => ({ ...prev, ...partial })),
    []
  );

  const setVoiceState = useCallback(
    (status: VoiceState, agentState?: AgentState) =>
      setSession((prev) => ({
        ...prev,
        status,
        agentState: agentState ?? prev.agentState,
      })),
    []
  );

  const addTranscript = useCallback(
    (speaker: TranscriptEntry["speaker"], text: string) => {
      const entry: TranscriptEntry = {
        id: generateId(),
        speaker,
        text,
        timestamp: new Date(),
      };
      setSession((prev) => ({
        ...prev,
        transcript: [...prev.transcript, entry],
      }));
      return entry;
    },
    []
  );

  const cleanupSSE = useCallback(() => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
  }, []);

  const resetSession = useCallback(() => {
    cleanupSSE();
    setBackendSessionId(null);
    setSession(createInitialState());
  }, [cleanupSSE]);

  const startSession = useCallback(async () => {
    try {
      setVoiceState("listening", "IDLE");
      const res = await api.createSession({ store_id: "store-042", language: "en" });
      const sessionId = res.id;
      setBackendSessionId(sessionId);

      // Connect SSE
      cleanupSSE();
      const sse = new EventSource(api.getEventStreamURL(sessionId));
      eventSourceRef.current = sse;

      sse.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          handleBackendEvent(data);
        } catch (e) {
          console.error("Failed to parse SSE event:", e);
        }
      };

      sse.onerror = (error) => {
        console.error("SSE Error:", error);
      };

      return sessionId;
    } catch (error) {
      console.error("Failed to start session:", error);
      setSession((prev) => ({ ...prev, error: "Failed to connect to backend" }));
      throw error;
    }
  }, [cleanupSSE, setVoiceState]);

  const handleBackendEvent = useCallback((eventData: any) => {
    const { type, payload } = eventData;
    
    switch (type) {
      case "AGENT_THINKING":
        setVoiceState("thinking", "UNDERSTANDING");
        break;
      case "AGENT_SPEAKING":
        setVoiceState("speaking", "RESPONDING");
        if (payload?.response) {
          addTranscript("kairo", payload.response);
        }
        setTimeout(() => setVoiceState("idle", "IDLE"), 3000);
        break;
      case "TOOL_STARTED":
        setVoiceState("tool_running", "TOOL_EXECUTION");
        setSession((prev) => ({
          ...prev,
          activities: [...prev.activities, {
            id: generateId(),
            label: `Running ${payload.tool}...`,
            status: "active",
            timestamp: new Date(),
          }]
        }));
        break;
      case "TOOL_COMPLETED":
        setVoiceState("thinking", "PLANNING");
        if (payload?.tool === "search_products" && payload.output?.products) {
          const frontendProducts = payload.output.products.map((p: any) => convertBackendProduct(p));
          setSession((prev) => ({
            ...prev,
            products: frontendProducts,
            activities: prev.activities.map((a, i) => 
              i === prev.activities.length - 1 ? { ...a, status: "complete" } : a
            )
          }));
        }
        break;
      case "ESCALATION_REQUIRED":
        setVoiceState("speaking", "ESCALATION");
        setSession((prev) => ({
          ...prev,
          safetyState: {
            triggered: true,
            reason: payload.reason,
            category: payload.category,
            escalationAvailable: true,
          }
        }));
        addTranscript("kairo", "I can help with product information, but I can't diagnose or recommend treatment. A qualified healthcare professional should help with this.");
        break;
      default:
        console.log("Unhandled backend event:", type, payload);
    }
  }, [setVoiceState, addTranscript]);

  const runProductDiscovery = useCallback(
    async (userInput: string) => {
      let currentSessionId = backendSessionId;
      if (!currentSessionId) {
        currentSessionId = await startSession();
      }
      if (!currentSessionId) return; // Still failed to start

      addTranscript("user", userInput);
      setVoiceState("thinking", "UNDERSTANDING");
      
      try {
        await api.sendMessage({
          session_id: currentSessionId,
          message: userInput,
        });
      } catch (e) {
        console.error("Failed to send message:", e);
      }
    },
    [backendSessionId, startSession, addTranscript, setVoiceState]
  );

  const runReservation = useCallback(
    async (product: Product, quantity: number) => {
      if (!backendSessionId) return;
      setVoiceState("action", "TOOL_EXECUTION");
      
      try {
        const res = await api.prepareReservation({
          session_id: backendSessionId,
          store_id: "store-042",
          items: [{
            product_id: product.id,
            quantity,
            unit_price: product.price
          }]
        });

        const confirmation = await api.confirmReservation({
          reservation_id: res.reservation_id
        });

        const frontendReservation = convertBackendReservation(confirmation as any);
        
        setSession((prev) => ({
          ...prev,
          reservation: frontendReservation,
          status: "success",
          agentState: "ACTION_COMPLETE",
        }));
        
        addTranscript("kairo", `Done. Reserved ${quantity} ${product.name}. Your code is ${frontendReservation.confirmationCode}.`);

      } catch (e) {
        console.error("Reservation failed:", e);
      }
    },
    [backendSessionId, setVoiceState, addTranscript]
  );

  const updateReservation = useCallback(
    async (reservation: Reservation, newQuantity: number) => {
      if (!backendSessionId) return;
      setVoiceState("action", "TOOL_EXECUTION");
      
      try {
        await api.updateReservation({
          reservation_id: reservation.id,
          product_id: reservation.productId,
          new_quantity: newQuantity
        });

        setSession((prev) => ({
          ...prev,
          reservation: { ...reservation, quantity: newQuantity },
          status: "success",
          agentState: "ACTION_COMPLETE",
        }));
        
        addTranscript("kairo", `Updated to ${newQuantity} ${reservation.productName}.`);
      } catch (e) {
        console.error("Update reservation failed", e);
      }
    },
    [backendSessionId, setVoiceState, addTranscript]
  );

  const runLowStockAlternatives = useCallback(async () => {
    runProductDiscovery("Do you have Mango Lassi?");
  }, [runProductDiscovery]);

  const startListening = useCallback(async () => {
    let currentSessionId = backendSessionId;
    if (!currentSessionId) {
      currentSessionId = await startSession();
    }
    if (!currentSessionId) return;

    setVoiceState("listening", "LISTENING");

    let stream: MediaStream | null = null;
    let ws: WebSocket | null = null;
    let mediaRecorder: MediaRecorder | null = null;

    try {
      // Request microphone access with specific constraints for better quality
      stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 48000, // Request high sample rate, we'll resample to 16kHz
          channelCount: 1,
        },
      });
      audioStreamRef.current = stream;
      setAudioStream(stream);

      const wsUrl = api.getVoiceWebSocketURL(currentSessionId).replace("http", "ws");
      ws = new WebSocket(wsUrl);
      voiceWsRef.current = ws;

      // Set up WebSocket event handlers BEFORE opening
      ws.onopen = () => {
        try {
          if (!stream) {
            console.error("No audio stream available");
            return;
          }
          // Use webm with opus for better compression, we'll convert to PCM16
          mediaRecorder = new MediaRecorder(stream, { 
            mimeType: "audio/webm;codecs=opus" 
          });
          mediaRecorderRef.current = mediaRecorder;

          mediaRecorder.ondataavailable = async (event) => {
            if (event.data.size > 0 && ws?.readyState === WebSocket.OPEN) {
              try {
                // Convert WebM/Opus to PCM16 at 16kHz for Deepgram
                const pcm16 = await convertWebMToPcm16(event.data, TARGET_SAMPLE_RATE);
                
                // Convert to base64
                const base64 = btoa(
                  String.fromCharCode(...pcm16)
                );
                
                ws.send(JSON.stringify({ type: "audio", data: base64 }));
              } catch (conversionErr) {
                console.error("Audio conversion error:", conversionErr);
              }
            }
          };

          mediaRecorder.onerror = (event) => {
            console.error("MediaRecorder error:", event);
          };

          mediaRecorder.start(CHUNK_INTERVAL_MS); // Send chunks every 250ms
        } catch (recorderErr) {
          console.error("Failed to create MediaRecorder:", recorderErr);
          // Cleanup on recorder creation failure
          if (stream) {
            stream.getTracks().forEach(track => track.stop());
          }
          if (ws) {
            ws.close();
          }
          setVoiceState("idle", "IDLE");
        }
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.type === "transcript" && msg.data?.is_final) {
            const text = msg.data.text;
            if (text) {
              runProductDiscovery(text);
              stopListening();
            }
          } else if (msg.type === "speech_start") {
            // Optional: handle speech start
            console.log("Speech started");
          } else if (msg.type === "speech_end") {
            // Optional: handle speech end
            console.log("Speech ended");
          } else if (msg.type === "ready") {
            console.log("Voice session ready");
          }
        } catch (err) {
          console.error("Voice WS error:", err);
        }
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.onclose = () => {
        console.log("WebSocket closed");
        // Clean up audio resources when WebSocket closes
        if (mediaRecorderRef.current) {
          mediaRecorderRef.current.stop();
          mediaRecorderRef.current = null;
        }
        if (audioStreamRef.current) {
          audioStreamRef.current.getTracks().forEach(track => track.stop());
          audioStreamRef.current = null;
        }
        setVoiceState("idle", "IDLE");
      };

    } catch (err) {
      console.error("Failed to start voice:", err);
      
      // Provide user-friendly error messages
      if (err instanceof DOMException) {
        switch (err.name) {
          case "NotAllowedError":
            console.error("Microphone permission denied");
            break;
          case "NotFoundError":
            console.error("No microphone found");
            break;
          case "NotReadableError":
            console.error("Microphone is in use by another application");
            break;
          case "OverconstrainedError":
            console.error("Microphone constraints not supported");
            break;
          default:
            console.error("Microphone access error:", err.message);
        }
      }
      
      // Cleanup on error
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (ws) {
        ws.close();
      }
      
      setVoiceState("idle", "IDLE");
    }
  }, [backendSessionId, startSession, setVoiceState, runProductDiscovery]);

  const stopListening = useCallback(() => {
    // Stop MediaRecorder first to flush any remaining data
    return new Promise<void>((resolve) => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        // Wait for the final ondataavailable event before cleaning up
        const handleDataAvailable = async () => {
          mediaRecorderRef.current!.removeEventListener("dataavailable", handleDataAvailable);
          
          // Give a small delay for the last chunk to be sent via WebSocket
          await new Promise(r => setTimeout(r, 100));
          
          // Stop audio tracks
          if (audioStreamRef.current) {
            audioStreamRef.current.getTracks().forEach(track => track.stop());
            audioStreamRef.current = null;
          }
          setAudioStream(null);
          
          // Close WebSocket connection gracefully
          if (voiceWsRef.current) {
            // Send stop message to server before closing
            if (voiceWsRef.current.readyState === WebSocket.OPEN) {
              voiceWsRef.current.send(JSON.stringify({ type: "stop" }));
            }
            voiceWsRef.current.close();
            voiceWsRef.current = null;
          }
          
          mediaRecorderRef.current = null;
          setVoiceState("idle", "IDLE");
          resolve();
        };
        
        mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
        mediaRecorderRef.current.stop();
      } else {
        // No active recorder, just clean up
        if (audioStreamRef.current) {
          audioStreamRef.current.getTracks().forEach(track => track.stop());
          audioStreamRef.current = null;
        }
        setAudioStream(null);
        
        if (voiceWsRef.current) {
          if (voiceWsRef.current.readyState === WebSocket.OPEN) {
            voiceWsRef.current.send(JSON.stringify({ type: "stop" }));
          }
          voiceWsRef.current.close();
          voiceWsRef.current = null;
        }
        
        mediaRecorderRef.current = null;
        setVoiceState("idle", "IDLE");
        resolve();
      }
    });
  }, [setVoiceState]);

  // Cleanup on unmount
  useEffect(() => {
    return () => cleanupSSE();
  }, [cleanupSSE]);

  return {
    session,
    update,
    setVoiceState,
    addTranscript,
    addActivity: (label: string, status: any = "pending") => {
      const id = generateId();
      setSession((prev) => ({
        ...prev,
        activities: [...prev.activities, { id, label, status, timestamp: new Date() }]
      }));
      return id;
    },
    updateActivity: (id: string, status: any) => {
      setSession((prev) => ({
        ...prev,
        activities: prev.activities.map(a => a.id === id ? { ...a, status } : a)
      }));
    },
    addTool: (name: string, displayName: string, description: string) => generateId(),
    updateTool: () => {},
    setConstraints: () => {},
    resetSession,
    startSession,
    startListening,
    stopListening,
    runProductDiscovery,
    runReservation,
    updateReservation,
    runSafetyEscalation: async () => {
      let currentSessionId = backendSessionId;
      if (!currentSessionId) {
        currentSessionId = await startSession();
      }
      if (!currentSessionId) return;

      setVoiceState("thinking", "UNDERSTANDING");
      
      try {
        await api.sendMessage({
          session_id: currentSessionId,
          message: "What medicine should I take for chest pain?",
        });
      } catch (e) {
        console.error("Failed to send message:", e);
      }
    },
    runLowStockAlternatives,
    // Expose audio stream for visualization components
    audioStream,
  };
}
