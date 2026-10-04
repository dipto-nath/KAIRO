document.addEventListener('DOMContentLoaded', () => {
    const startVoiceBtn = document.getElementById('startVoiceBtn');
    const voiceWave = document.getElementById('voiceWave');
    const chatContainer = document.getElementById('chatContainer');
    const videoFeed = document.getElementById('videoFeed');
    const statusIndicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');
    const interimTextDiv = document.getElementById('interimText');
    const textInput = document.getElementById('textInput');
    const sendTextBtn = document.getElementById('sendTextBtn');

    // Speech Recognition setup (Web Speech API)
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition;
    
    // Speech Synthesis setup
    const synth = window.speechSynthesis;
    let yunaVoice = null;

    let isListening = false;
    let finalTranscript = '';

    // Try to find a Japanese voice to speak English with an accent, or a cute female English voice
    function loadVoices() {
        const voices = synth.getVoices();
        yunaVoice = voices.find(v => v.lang === 'ja-JP' && v.name.includes('Female')) || 
                    voices.find(v => v.lang === 'ja-JP') ||
                    voices.find(v => v.name.includes('Haruka')) ||
                    voices.find(v => v.name.includes('Google UK English Female')) || 
                    voices.find(v => v.lang === 'en-US' && v.name.includes('Female')) || 
                    voices[0];
    }
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }

    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = true; // Keep listening until stopped manually or handled
        recognition.interimResults = true; // THIS enables real-time text
        recognition.lang = 'en-US';

        recognition.onstart = function() {
            setListeningState(true);
            finalTranscript = '';
            interimTextDiv.textContent = '';
        };

        recognition.onresult = function(event) {
            let interimTranscript = '';
            let newlyFinalized = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    newlyFinalized += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            
            // Show real-time typing effect
            interimTextDiv.textContent = interimTranscript;

            if (newlyFinalized) {
                // User finished a sentence
                finalTranscript += newlyFinalized;
                addMessage(newlyFinalized, 'user');
                interimTextDiv.textContent = ''; // clear real-time area
                
                // Process and respond to the finalized sentence
                setTimeout(() => {
                    const aiResponse = generateAIResponse(newlyFinalized);
                    speakAndShowAIResponse(aiResponse);
                }, 500);
            }
        };

        recognition.onerror = function(event) {
            console.error("Speech recognition error", event.error);
            setListeningState(false);
            statusText.textContent = "Error: " + event.error;
        };

        recognition.onend = function() {
            if (isListening && !synth.speaking) {
                setListeningState(false);
            }
        };
    } else {
        alert("Sorry, your browser doesn't support the Web Speech API. Try using Google Chrome.");
    }

    startVoiceBtn.addEventListener('click', () => {
        if (!recognition) {
            alert("Speech Recognition not supported in this browser. Please use the text input below.");
            return;
        }

        if (isListening) {
            recognition.stop();
            setListeningState(false);
        } else {
            synth.cancel();
            try {
                recognition.start();
            } catch(e) {
                console.error("Error starting recognition", e);
                alert("Microphone access might be blocked. Check browser permissions or use the text box.");
            }
        }
    });

    // Handle Text Input Fallback
    function handleTextInput() {
        const text = textInput.value.trim();
        if(text) {
            addMessage(text, 'user');
            textInput.value = '';
            setTimeout(() => {
                const aiResponse = generateAIResponse(text);
                speakAndShowAIResponse(aiResponse);
            }, 500);
        }
    }

    sendTextBtn.addEventListener('click', handleTextInput);
    textInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') handleTextInput();
    });

    function setListeningState(active) {
        isListening = active;
        if (active) {
            startVoiceBtn.innerHTML = '<i data-lucide="square"></i> Stop Listening';
            startVoiceBtn.style.background = '#ef4444';
            startVoiceBtn.style.color = '#fff';
            voiceWave.classList.add('active');
            statusIndicator.className = 'status-indicator listening';
            statusText.textContent = 'Listening... Speak now';
            interimTextDiv.style.opacity = '1';
        } else {
            startVoiceBtn.innerHTML = '<i data-lucide="mic"></i> Start Speaking';
            startVoiceBtn.style.background = '';
            startVoiceBtn.style.color = '';
            voiceWave.classList.remove('active');
            statusIndicator.className = 'status-indicator';
            statusText.textContent = 'System Ready';
            interimTextDiv.style.opacity = '0';
        }
        lucide.createIcons();
    }

    function addMessage(text, type) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${type}-message`;
        
        const icon = type === 'ai' ? 'bot' : 'user';

        msgDiv.innerHTML = `
            <div class="avatar"><i data-lucide="${icon}"></i></div>
            <div class="bubble">
                <p>${text}</p>
            </div>
        `;
        
        chatContainer.appendChild(msgDiv);
        lucide.createIcons();
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function speakAndShowAIResponse(text) {
        // Pause recognition temporarily while AI speaks to avoid feedback loops
        if (isListening) {
            recognition.stop();
        }

        addMessage(text, 'ai');

        const utterThis = new SpeechSynthesisUtterance(text);
        if (yunaVoice) utterThis.voice = yunaVoice;
        utterThis.pitch = 1.3; // Increased pitch for a cuter/higher voice
        utterThis.rate = 1.0;

        utterThis.onstart = () => {
            videoFeed.classList.add('speaking');
            statusIndicator.className = 'status-indicator speaking';
            statusText.textContent = 'AI is speaking...';
        };

        utterThis.onend = () => {
            videoFeed.classList.remove('speaking');
            
            // Resume listening automatically if we were listening before
            if (isListening) {
                try {
                    recognition.start();
                    statusIndicator.className = 'status-indicator listening';
                    statusText.textContent = 'Listening... Speak now';
                } catch(e) {
                    console.log("Could not restart recognition automatically", e);
                    setListeningState(false);
                }
            } else {
                statusIndicator.className = 'status-indicator';
                statusText.textContent = 'System Ready';
            }
        };

        synth.speak(utterThis);
    }

    function generateAIResponse(text) {
        text = text.toLowerCase();
        
        if (text.includes('hello') || text.includes('hi')) {
            return "Hello there! How can I assist you today?";
        }
        if (text.includes('headache') || text.includes('medicine')) {
            return "I can help you find headache medicine. Are you taking any other medications currently?";
        }
        if (text.includes('blood pressure') || text.includes('yes')) {
            return "Thank you for letting me know. I found 3 safe options in aisle 4. Would you like me to call a pharmacist?";
        }
        if (text.includes('onigiri') || text.includes('food') || text.includes('snack')) {
            return "Our fresh onigiri just arrived! They are located in the refrigerated section right behind you.";
        }
        if (text.includes('appointment') || text.includes('doctor')) {
            return "I can help book an appointment. Which department do you need to visit?";
        }

        // Default fallback
        return "I'm sorry, I didn't quite catch that. Could you please repeat or ask me something else?";
    }
});
