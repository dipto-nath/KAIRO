(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/demo/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$KairoShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/KairoShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voice$2f$VoiceCore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/voice/VoiceCore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voice$2f$WaveformBars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/voice/WaveformBars.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$conversation$2f$LiveTranscript$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/conversation/LiveTranscript.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$conversation$2f$ContextChips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/conversation/ContextChips.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$agent$2f$AgentActivity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/agent/AgentActivity.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reservation$2f$ReservationFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reservation/ReservationFlow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$safety$2f$SafetyEscalation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/safety/SafetyEscalation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientOnly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ClientOnly.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function DemoPage() {
    _s();
    const { session, resetSession, update, setVoiceState, runProductDiscovery, runReservation, updateReservation, runSafetyEscalation, runLowStockAlternatives, addTranscript, startSession, audioStream } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [activeScenario, setActiveScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showReservationFor, setShowReservationFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const runScenario = async (id)=>{
        if (isRunning) return;
        resetSession();
        setActiveScenario(id);
        setShowReservationFor(null);
        setIsRunning(true);
        try {
            setVoiceState("thinking", "UNDERSTANDING");
            if (id === "product_discovery") {
                addTranscript("user", "I need a cold drink under ₹70, preferably not too sweet.");
                await new Promise((r)=>setTimeout(r, 1200));
                addTranscript("kairo", "I found a few cold drinks under ₹70 that are currently in stock. Would you like to reserve one of these?");
                update({
                    products: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PRODUCTS"][1],
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PRODUCTS"][2],
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PRODUCTS"][5]
                    ]
                });
            } else if (id === "low_stock") {
                addTranscript("user", "Do you have Green Apple Sparkling?");
                await new Promise((r)=>setTimeout(r, 1200));
                addTranscript("kairo", "Green Apple Sparkling is currently out of stock. Here are some alternatives.");
                update({
                    products: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PRODUCTS"][1],
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PRODUCTS"][2]
                    ]
                });
            } else if (id === "reservation") {
                addTranscript("user", "Reserve one Strawberry Milk please.");
                await new Promise((r)=>setTimeout(r, 1200));
                addTranscript("kairo", "I can help with that. Please confirm the details.");
                setShowReservationFor(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PRODUCTS"][0]);
            } else if (id === "safety_escalation") {
                addTranscript("user", "What medicine should I take for chest pain?");
                await new Promise((r)=>setTimeout(r, 1200));
                addTranscript("kairo", "I can help with product information, but I can't diagnose or recommend treatment. A qualified healthcare professional should help with this.");
                update({
                    safetyState: {
                        triggered: true,
                        reason: "User asking for medical advice",
                        category: "MEDICAL_ADVICE",
                        escalationAvailable: true
                    }
                });
            }
            setVoiceState("idle", "IDLE");
        } finally{
            setIsRunning(false);
        }
    };
    const handleReserve = (product)=>setShowReservationFor(product);
    const handleConfirm = (qty)=>{
        if (!showReservationFor) return;
        setShowReservationFor(null);
        setIsRunning(true);
        runReservation(showReservationFor, qty).finally(()=>setIsRunning(false));
    };
    const hasProducts = session.products.length > 0;
    const hasReservation = !!session.reservation;
    const hasSafety = !!session.safetyState?.triggered;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientOnly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientOnly"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$KairoShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KairoShell"], {
            showNav: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "1rem 1.5rem",
                        borderBottom: "1px solid var(--color-kairo-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        flexWrap: "wrap"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "0.625rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: "var(--color-signal)",
                                        marginBottom: "0.125rem"
                                    },
                                    children: "Live Product Demonstration"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "1.0625rem",
                                        fontWeight: 600,
                                        color: "var(--color-kairo-offwhite)",
                                        letterSpacing: "-0.02em"
                                    },
                                    children: "Smart Product Discovery + Reservation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/demo/page.tsx",
                            lineNumber: 116,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "0.375rem",
                                flexWrap: "wrap"
                            },
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_SCENARIOS"].map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>runScenario(scenario.id),
                                        disabled: isRunning,
                                        style: {
                                            padding: "0.5rem 0.875rem",
                                            background: activeScenario === scenario.id ? "var(--color-signal)" : "var(--color-kairo-surface)",
                                            border: `1px solid ${activeScenario === scenario.id ? "var(--color-signal)" : "var(--color-kairo-border)"}`,
                                            borderRadius: "7px",
                                            color: activeScenario === scenario.id ? "white" : "var(--color-kairo-subtle)",
                                            fontSize: "0.8125rem",
                                            fontWeight: 600,
                                            cursor: isRunning ? "not-allowed" : "pointer",
                                            opacity: isRunning && activeScenario !== scenario.id ? 0.5 : 1,
                                            transition: "all 0.15s ease"
                                        },
                                        children: scenario.label
                                    }, scenario.id, false, {
                                        fileName: "[project]/src/app/demo/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        resetSession();
                                        setActiveScenario(null);
                                        setShowReservationFor(null);
                                    },
                                    style: {
                                        padding: "0.5rem 0.875rem",
                                        background: "transparent",
                                        border: "1px solid var(--color-kairo-border)",
                                        borderRadius: "7px",
                                        color: "var(--color-kairo-muted)",
                                        fontSize: "0.8125rem",
                                        cursor: "pointer"
                                    },
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/demo/page.tsx",
                            lineNumber: 142,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/demo/page.tsx",
                    lineNumber: 105,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        display: "grid",
                        gridTemplateColumns: "1fr 340px",
                        overflow: "hidden"
                    },
                    className: "demo-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "2.5rem 2rem",
                                gap: "1.5rem",
                                overflowY: "auto",
                                borderRight: "1px solid var(--color-kairo-border)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voice$2f$VoiceCore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceCore"], {
                                    state: session.status,
                                    size: 200,
                                    audioStream: audioStream
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voice$2f$WaveformBars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaveformBars"], {
                                    state: session.status,
                                    width: 300,
                                    height: 44,
                                    barCount: 30
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 11
                                }, this),
                                activeScenario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "0.375rem 0.875rem",
                                        background: "var(--color-kairo-surface)",
                                        border: "1px solid var(--color-kairo-border)",
                                        borderRadius: "6px",
                                        fontSize: "0.75rem",
                                        color: "var(--color-kairo-subtle)"
                                    },
                                    children: [
                                        "Scenario:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: "var(--color-kairo-offwhite)"
                                            },
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_SCENARIOS"].find((s)=>s.id === activeScenario)?.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/demo/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                session.constraints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "100%",
                                        maxWidth: 480
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$conversation$2f$ContextChips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextChips"], {
                                        constraints: session.constraints
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/demo/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                hasSafety && session.safetyState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "100%",
                                        maxWidth: 480
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$safety$2f$SafetyEscalation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafetyEscalation"], {
                                        safety: session.safetyState,
                                        onConnectStaff: ()=>{},
                                        onContinue: ()=>{},
                                        onDismiss: resetSession
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/demo/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this),
                                showReservationFor && !hasReservation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "100%",
                                        maxWidth: 480
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reservation$2f$ReservationFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReservationSummary"], {
                                        productName: showReservationFor.name,
                                        productEmoji: showReservationFor.imageEmoji,
                                        unitPrice: showReservationFor.price,
                                        quantity: 1,
                                        storeName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_STORE"].name,
                                        onConfirm: handleConfirm,
                                        onCancel: ()=>setShowReservationFor(null)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/demo/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                hasReservation && session.reservation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "100%",
                                        maxWidth: 480
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reservation$2f$ReservationFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReservationSuccess"], {
                                        reservation: session.reservation,
                                        onDone: resetSession,
                                        onUpdate: (qty)=>session.reservation && updateReservation(session.reservation, qty)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/demo/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this),
                                hasProducts && !hasReservation && !showReservationFor && !hasSafety && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "100%",
                                        maxWidth: 480
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "0.625rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.12em",
                                                textTransform: "uppercase",
                                                color: "var(--color-kairo-muted)",
                                                marginBottom: "0.75rem"
                                            },
                                            children: [
                                                session.products.length,
                                                " result",
                                                session.products.length !== 1 ? "s" : "",
                                                " found"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/demo/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductGrid"], {
                                            products: session.products,
                                            inventoryMap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_INVENTORY"],
                                            onReserve: handleReserve
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/demo/page.tsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                !activeScenario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        padding: "1rem"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: "var(--color-kairo-muted)",
                                            fontSize: "0.9375rem",
                                            lineHeight: 1.6
                                        },
                                        children: "Select a demo scenario above to see KAIRO in action."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/demo/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/demo/page.tsx",
                            lineNumber: 213,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    label: "Conversation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: "0 0 auto",
                                        borderBottom: "1px solid var(--color-kairo-border)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$conversation$2f$LiveTranscript$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveTranscript"], {
                                        entries: session.transcript
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/demo/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    label: "Agent Activity"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        overflowY: "auto",
                                        padding: "0.875rem 1rem"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$agent$2f$AgentActivity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentActivity"], {
                                        steps: session.activities,
                                        tools: session.toolHistory
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/demo/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "0.75rem 1rem",
                                        borderTop: "1px solid var(--color-kairo-border)",
                                        display: "grid",
                                        gridTemplateColumns: "repeat(3, 1fr)",
                                        gap: "0.5rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricItem, {
                                            label: "Latency",
                                            value: session.metrics.responseLatencyMs > 0 ? `${session.metrics.responseLatencyMs}ms` : "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/demo/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricItem, {
                                            label: "Tools",
                                            value: String(session.metrics.toolCallCount || "—")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/demo/page.tsx",
                                            lineNumber: 377,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricItem, {
                                            label: "Complete",
                                            value: session.metrics.taskCompletionRate > 0 ? `${session.metrics.taskCompletionRate}%` : "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/demo/page.tsx",
                                            lineNumber: 381,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/demo/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/demo/page.tsx",
                            lineNumber: 337,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/demo/page.tsx",
                    lineNumber: 203,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhyKairo, {}, void 0, false, {
                    fileName: "[project]/src/app/demo/page.tsx",
                    lineNumber: 394,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
        @media (max-width: 900px) {
          .demo-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `
                }, void 0, false, {
                    fileName: "[project]/src/app/demo/page.tsx",
                    lineNumber: 396,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/demo/page.tsx",
            lineNumber: 103,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/demo/page.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(DemoPage, "GDHztunHlJxJDOBbLzaLPm8Tj9E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = DemoPage;
function SectionHeader({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "0.625rem 1rem",
            borderBottom: "1px solid var(--color-kairo-border)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-kairo-muted)"
            },
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/demo/page.tsx",
            lineNumber: 416,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/demo/page.tsx",
        lineNumber: 410,
        columnNumber: 5
    }, this);
}
_c1 = SectionHeader;
function MetricItem({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "var(--color-kairo-offwhite)"
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/demo/page.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-kairo-muted)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/demo/page.tsx",
                lineNumber: 437,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/demo/page.tsx",
        lineNumber: 433,
        columnNumber: 5
    }, this);
}
_c2 = MetricItem;
function WhyKairo() {
    const features = [
        {
            label: "Natural Voice",
            desc: "Speak normally. No commands to learn.",
            icon: "◎"
        },
        {
            label: "Agentic Action",
            desc: "Uses real tools and completes tasks.",
            icon: "⟳"
        },
        {
            label: "Live Context",
            desc: "Remembers the full conversation.",
            icon: "▣"
        },
        {
            label: "Grounded",
            desc: "Facts come from connected systems.",
            icon: "◈"
        },
        {
            label: "Responsible",
            desc: "Sensitive requests are escalated safely.",
            icon: "⊕"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderTop: "1px solid var(--color-kairo-border)",
            padding: "2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-kairo-muted)"
                },
                children: "Why KAIRO"
            }, void 0, false, {
                fileName: "[project]/src/app/demo/page.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: "1rem"
                },
                children: features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "0.875rem",
                            background: "var(--color-kairo-surface)",
                            border: "1px solid var(--color-kairo-border)",
                            borderRadius: "10px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "1.125rem",
                                    color: "var(--color-signal)",
                                    marginBottom: "0.375rem",
                                    fontFamily: "monospace"
                                },
                                children: f.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/demo/page.tsx",
                                lineNumber: 511,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.875rem",
                                    fontWeight: 700,
                                    color: "var(--color-kairo-offwhite)",
                                    marginBottom: "0.25rem",
                                    letterSpacing: "-0.01em"
                                },
                                children: f.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/demo/page.tsx",
                                lineNumber: 521,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.75rem",
                                    color: "var(--color-kairo-muted)",
                                    lineHeight: 1.5
                                },
                                children: f.desc
                            }, void 0, false, {
                                fileName: "[project]/src/app/demo/page.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this)
                        ]
                    }, f.label, true, {
                        fileName: "[project]/src/app/demo/page.tsx",
                        lineNumber: 502,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/demo/page.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "0.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "0.625rem",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--color-kairo-muted)",
                            marginBottom: "0.875rem"
                        },
                        children: "Built for more than retail"
                    }, void 0, false, {
                        fileName: "[project]/src/app/demo/page.tsx",
                        lineNumber: 547,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                            gap: "0.75rem"
                        },
                        children: [
                            {
                                label: "Retail",
                                items: [
                                    "Products",
                                    "Inventory",
                                    "Reservation"
                                ],
                                active: true
                            },
                            {
                                label: "Pharmacy",
                                items: [
                                    "Availability",
                                    "Pharmacist",
                                    "Safe Escalation"
                                ],
                                active: false
                            },
                            {
                                label: "Healthcare",
                                items: [
                                    "Appointments",
                                    "Navigation",
                                    "Human Handoff"
                                ],
                                active: false
                            }
                        ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "0.875rem",
                                    background: v.active ? "color-mix(in srgb, var(--color-signal) 8%, transparent)" : "var(--color-kairo-surface)",
                                    border: `1px solid ${v.active ? "color-mix(in srgb, var(--color-signal) 25%, transparent)" : "var(--color-kairo-border)"}`,
                                    borderRadius: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "0.8125rem",
                                            fontWeight: 700,
                                            color: v.active ? "var(--color-signal)" : "var(--color-kairo-subtle)",
                                            marginBottom: "0.375rem",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.375rem"
                                        },
                                        children: [
                                            v.label,
                                            v.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.5625rem",
                                                    background: "var(--color-signal)",
                                                    color: "white",
                                                    padding: "0.0625rem 0.375rem",
                                                    borderRadius: "4px",
                                                    fontWeight: 700
                                                },
                                                children: "LIVE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/demo/page.tsx",
                                                lineNumber: 607,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/demo/page.tsx",
                                        lineNumber: 594,
                                        columnNumber: 15
                                    }, this),
                                    v.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "0.6875rem",
                                                color: "var(--color-kairo-muted)",
                                                lineHeight: 1.7
                                            },
                                            children: [
                                                "· ",
                                                item
                                            ]
                                        }, item, true, {
                                            fileName: "[project]/src/app/demo/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, v.label, true, {
                                fileName: "[project]/src/app/demo/page.tsx",
                                lineNumber: 583,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/demo/page.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/demo/page.tsx",
                lineNumber: 546,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/demo/page.tsx",
        lineNumber: 474,
        columnNumber: 5
    }, this);
}
_c3 = WhyKairo;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DemoPage");
__turbopack_context__.k.register(_c1, "SectionHeader");
__turbopack_context__.k.register(_c2, "MetricItem");
__turbopack_context__.k.register(_c3, "WhyKairo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ClientOnly.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientOnly",
    ()=>ClientOnly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ClientOnly({ children }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientOnly.useEffect": ()=>setMounted(true)
    }["ClientOnly.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ClientOnly.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_s(ClientOnly, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ClientOnly;
var _c;
__turbopack_context__.k.register(_c, "ClientOnly");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/agent/AgentActivity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentActivity",
    ()=>AgentActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function AgentActivity({ steps, tools }) {
    const hasContent = steps.length > 0 || tools.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem"
        },
        children: [
            !hasContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "0.8125rem",
                    color: "var(--color-kairo-muted)",
                    padding: "0.5rem 0"
                },
                children: "Agent activity will appear here."
            }, void 0, false, {
                fileName: "[project]/src/components/agent/AgentActivity.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            steps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityStepRow, {
                    step: step
                }, step.id, false, {
                    fileName: "[project]/src/components/agent/AgentActivity.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)),
            tools.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: steps.length > 0 ? "0.75rem" : 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem"
                },
                children: tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolExecutionCard, {
                        tool: tool
                    }, tool.id, false, {
                        fileName: "[project]/src/components/agent/AgentActivity.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/agent/AgentActivity.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/agent/AgentActivity.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = AgentActivity;
function ActivityStepRow({ step }) {
    const statusIcon = step.status === "complete" ? "✓" : step.status === "active" ? "→" : step.status === "error" ? "✗" : "○";
    const color = step.status === "complete" ? "var(--color-success)" : step.status === "active" ? "var(--color-kairo-offwhite)" : step.status === "error" ? "var(--color-error)" : "var(--color-kairo-muted)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "activity-step",
        style: {
            color,
            animation: "tool-enter 0.3s ease forwards"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "monospace",
                    fontSize: "0.7rem",
                    minWidth: "1rem",
                    fontWeight: step.status === "active" ? 700 : 400
                },
                children: statusIcon
            }, void 0, false, {
                fileName: "[project]/src/components/agent/AgentActivity.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: step.label
            }, void 0, false, {
                fileName: "[project]/src/components/agent/AgentActivity.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            step.status === "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "inline-block",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--color-kairo-offwhite)",
                    animation: "fade-in 0.5s ease infinite alternate",
                    marginLeft: "0.25rem"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/agent/AgentActivity.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/agent/AgentActivity.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c1 = ActivityStepRow;
function ToolExecutionCard({ tool }) {
    const statusColor = tool.status === "success" ? "var(--color-success)" : tool.status === "error" ? "var(--color-error)" : tool.status === "running" ? "var(--color-warning)" : "var(--color-kairo-muted)";
    const statusLabel = tool.status === "success" ? "Complete" : tool.status === "error" ? "Failed" : "Running...";
    const outputEntries = tool.output ? Object.entries(tool.output).slice(0, 2) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "0.625rem 0.875rem",
            background: "var(--color-kairo-surface)",
            border: "1px solid var(--color-kairo-border)",
            borderLeft: `2px solid ${statusColor}`,
            borderRadius: "6px",
            animation: "tool-enter 0.3s ease forwards"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "0.6875rem",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "var(--color-kairo-offwhite)",
                            fontFamily: "monospace"
                        },
                        children: tool.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/agent/AgentActivity.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "0.625rem",
                            fontWeight: 600,
                            color: statusColor,
                            letterSpacing: "0.04em"
                        },
                        children: statusLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/agent/AgentActivity.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/agent/AgentActivity.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "0.75rem",
                    color: "var(--color-kairo-subtle)",
                    marginTop: "0.25rem"
                },
                children: tool.description
            }, void 0, false, {
                fileName: "[project]/src/components/agent/AgentActivity.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            outputEntries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "0.375rem",
                    display: "flex",
                    gap: "0.75rem",
                    flexWrap: "wrap"
                },
                children: outputEntries.map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "0.6875rem",
                            color: statusColor,
                            fontFamily: "monospace"
                        },
                        children: [
                            k,
                            ": ",
                            String(v)
                        ]
                    }, k, true, {
                        fileName: "[project]/src/components/agent/AgentActivity.tsx",
                        lineNumber: 189,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/agent/AgentActivity.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/agent/AgentActivity.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_c2 = ToolExecutionCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AgentActivity");
__turbopack_context__.k.register(_c1, "ActivityStepRow");
__turbopack_context__.k.register(_c2, "ToolExecutionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/conversation/ContextChips.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextChips",
    ()=>ContextChips
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function ContextChips({ constraints }) {
    if (constraints.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-kairo-muted)"
                },
                children: "Current Request"
            }, void 0, false, {
                fileName: "[project]/src/components/conversation/ContextChips.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.375rem"
                },
                children: constraints.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            padding: "0.25rem 0.625rem",
                            background: "color-mix(in srgb, var(--color-pulse) 8%, transparent)",
                            border: "1px solid color-mix(in srgb, var(--color-pulse) 22%, transparent)",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: "var(--color-pulse-light)",
                            letterSpacing: "0.04em",
                            animation: "fade-up 0.3s ease forwards"
                        },
                        children: [
                            c.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.7rem"
                                },
                                children: c.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/conversation/ContextChips.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            c.value
                        ]
                    }, c.key, true, {
                        fileName: "[project]/src/components/conversation/ContextChips.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/conversation/ContextChips.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/conversation/ContextChips.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ContextChips;
var _c;
__turbopack_context__.k.register(_c, "ContextChips");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/conversation/LiveTranscript.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveTranscript",
    ()=>LiveTranscript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LiveTranscript({ entries, maxEntries = 6 }) {
    _s();
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visible = entries.slice(-maxEntries);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveTranscript.useEffect": ()=>{
            bottomRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["LiveTranscript.useEffect"], [
        entries
    ]);
    if (entries.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "2rem 1rem",
                textAlign: "center",
                color: "var(--color-kairo-muted)",
                fontSize: "0.8125rem"
            },
            children: "Conversation will appear here."
        }, void 0, false, {
            fileName: "[project]/src/components/conversation/LiveTranscript.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            overflowY: "auto",
            padding: "1rem",
            maxHeight: "320px"
        },
        role: "log",
        "aria-label": "Conversation transcript",
        "aria-live": "polite",
        children: [
            visible.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConversationTurn, {
                    entry: entry
                }, entry.id, false, {
                    fileName: "[project]/src/components/conversation/LiveTranscript.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bottomRef
            }, void 0, false, {
                fileName: "[project]/src/components/conversation/LiveTranscript.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/conversation/LiveTranscript.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(LiveTranscript, "eaUWg0io6wE0buoFSqU1QLjVsUo=");
_c = LiveTranscript;
function ConversationTurn({ entry }) {
    const isUser = entry.speaker === "user";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            alignItems: isUser ? "flex-end" : "flex-start",
            animation: "fade-up 0.35s ease forwards"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "0.625rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isUser ? "var(--color-kairo-muted)" : "var(--color-pulse-dim)",
                    paddingInline: "0.25rem"
                },
                children: isUser ? "YOU" : "KAIRO"
            }, void 0, false, {
                fileName: "[project]/src/components/conversation/LiveTranscript.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: isUser ? "transcript-user" : "transcript-kairo",
                style: {
                    fontSize: "0.9375rem",
                    lineHeight: 1.55
                },
                children: entry.text
            }, void 0, false, {
                fileName: "[project]/src/components/conversation/LiveTranscript.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/conversation/LiveTranscript.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c1 = ConversationTurn;
var _c, _c1;
__turbopack_context__.k.register(_c, "LiveTranscript");
__turbopack_context__.k.register(_c1, "ConversationTurn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/products/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard,
    "ProductGrid",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function ProductCard({ product, inventory, onReserve, onSelect, compact = false }) {
    const invStatus = inventory?.status ?? "available";
    const qty = inventory?.quantity ?? 0;
    const invColor = invStatus === "available" ? "var(--color-success)" : invStatus === "low_stock" ? "var(--color-warning)" : "var(--color-error)";
    const invLabel = invStatus === "out_of_stock" ? "Unavailable" : invStatus === "low_stock" ? `${qty} left` : `${qty} available`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "var(--color-kairo-charcoal)",
            border: `1px solid ${product.isRecommended ? "color-mix(in srgb, var(--color-signal) 35%, transparent)" : "var(--color-kairo-border)"}`,
            borderRadius: "12px",
            padding: compact ? "0.875rem" : "1.125rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
            position: "relative",
            cursor: onSelect ? "pointer" : "default",
            transition: "border-color 0.15s ease, transform 0.15s ease",
            animation: "fade-up 0.4s ease forwards"
        },
        onClick: ()=>onSelect?.(product),
        role: onSelect ? "button" : undefined,
        tabIndex: onSelect ? 0 : undefined,
        onKeyDown: (e)=>e.key === "Enter" && onSelect?.(product),
        children: [
            product.isRecommended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "-1px",
                    left: "1rem",
                    background: "var(--color-signal)",
                    color: "white",
                    fontSize: "0.5625rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.125rem 0.5rem",
                    borderRadius: "0 0 4px 4px"
                },
                children: "Best Match"
            }, void 0, false, {
                fileName: "[project]/src/components/products/ProductCard.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    marginTop: product.isRecommended ? "0.5rem" : 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 48,
                            height: 48,
                            borderRadius: "10px",
                            background: "var(--color-kairo-surface)",
                            border: "1px solid var(--color-kairo-border)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.5rem",
                            flexShrink: 0
                        },
                        children: product.imageEmoji
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: "0.9375rem",
                                    color: "var(--color-kairo-offwhite)",
                                    letterSpacing: "-0.01em",
                                    lineHeight: 1.2
                                },
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.75rem",
                                    color: "var(--color-kairo-subtle)",
                                    marginTop: "0.125rem",
                                    lineHeight: 1.4
                                },
                                children: product.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "1.0625rem",
                            fontWeight: 700,
                            color: "var(--color-kairo-offwhite)",
                            letterSpacing: "-0.02em",
                            flexShrink: 0
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(product.price)
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products/ProductCard.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.25rem"
                },
                children: product.attributes.slice(0, 3).map((attr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            padding: "0.125rem 0.5rem",
                            background: "var(--color-kairo-surface)",
                            border: "1px solid var(--color-kairo-border)",
                            borderRadius: "4px",
                            fontSize: "0.6875rem",
                            fontWeight: 500,
                            color: "var(--color-kairo-subtle)"
                        },
                        children: attr
                    }, attr, false, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/products/ProductCard.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    paddingTop: "0.25rem",
                    borderTop: "1px solid var(--color-kairo-border)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.125rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.6875rem",
                                    fontWeight: 600,
                                    color: invColor,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.25rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 5,
                                            height: 5,
                                            borderRadius: "50%",
                                            background: invColor,
                                            display: "inline-block"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ProductCard.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    invLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.6875rem",
                                    color: "var(--color-kairo-muted)"
                                },
                                children: [
                                    product.section,
                                    " · ",
                                    product.aisle
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    onReserve && invStatus !== "out_of_stock" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        style: {
                            padding: "0.375rem 1rem",
                            fontSize: "0.8125rem",
                            minHeight: 36
                        },
                        onClick: (e)=>{
                            e.stopPropagation();
                            onReserve(product);
                        },
                        children: "Reserve"
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products/ProductCard.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            product.isRecommended && product.matchReasons && !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.25rem",
                    paddingTop: "0.25rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "0.6875rem",
                            color: "var(--color-signal)",
                            fontWeight: 600
                        },
                        children: "Why this matches:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this),
                    product.matchReasons.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: "0.6875rem",
                                color: "var(--color-kairo-subtle)"
                            },
                            children: [
                                "· ",
                                r
                            ]
                        }, r, true, {
                            fileName: "[project]/src/components/products/ProductCard.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products/ProductCard.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/products/ProductCard.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = ProductCard;
function ProductGrid({ products, inventoryMap = {}, onReserve, onSelect }) {
    if (products.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem"
        },
        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                product: product,
                inventory: inventoryMap[product.id],
                onReserve: onReserve,
                onSelect: onSelect
            }, product.id, false, {
                fileName: "[project]/src/components/products/ProductCard.tsx",
                lineNumber: 288,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/products/ProductCard.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
_c1 = ProductGrid;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductCard");
__turbopack_context__.k.register(_c1, "ProductGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reservation/ReservationFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReservationSuccess",
    ()=>ReservationSuccess,
    "ReservationSummary",
    ()=>ReservationSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ReservationSummary({ productName, productEmoji, unitPrice, quantity: initialQty, storeName, onConfirm, onCancel }) {
    _s();
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialQty);
    const total = unitPrice * qty;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "var(--color-kairo-charcoal)",
            border: "1px solid var(--color-kairo-border)",
            borderRadius: "16px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            animation: "fade-up 0.4s ease forwards"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "0.625rem",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--color-kairo-muted)",
                            marginBottom: "0.5rem"
                        },
                        children: "KAIRO"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "1.0625rem",
                            fontWeight: 500,
                            color: "var(--color-kairo-offwhite)",
                            lineHeight: 1.4
                        },
                        children: "You're reserving:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.875rem",
                    background: "var(--color-kairo-surface)",
                    border: "1px solid var(--color-kairo-border)",
                    borderRadius: "10px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "2rem"
                        },
                        children: productEmoji
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: "0.9375rem",
                                    color: "var(--color-kairo-offwhite)"
                                },
                                children: [
                                    qty,
                                    " × ",
                                    productName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.75rem",
                                    color: "var(--color-kairo-subtle)",
                                    marginTop: "0.125rem"
                                },
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(unitPrice),
                                    " each"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.625rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setQty(Math.max(1, qty - 1)),
                                style: {
                                    width: 28,
                                    height: 28,
                                    borderRadius: "6px",
                                    background: "var(--color-kairo-border)",
                                    border: "none",
                                    color: "var(--color-kairo-offwhite)",
                                    cursor: "pointer",
                                    fontSize: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                "aria-label": "Decrease quantity",
                                children: "−"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    color: "var(--color-kairo-offwhite)",
                                    minWidth: "1.5rem",
                                    textAlign: "center"
                                },
                                children: qty
                            }, void 0, false, {
                                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setQty(Math.min(10, qty + 1)),
                                style: {
                                    width: 28,
                                    height: 28,
                                    borderRadius: "6px",
                                    background: "var(--color-kairo-border)",
                                    border: "none",
                                    color: "var(--color-kairo-offwhite)",
                                    cursor: "pointer",
                                    fontSize: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                "aria-label": "Increase quantity",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
                        label: "Total",
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(total),
                        strong: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
                        label: "Store",
                        value: storeName
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "0.75rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        style: {
                            flex: 1
                        },
                        onClick: ()=>onConfirm(qty),
                        children: "Confirm Reservation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-ghost",
                        onClick: onCancel,
                        "aria-label": "Cancel reservation",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "0.75rem",
                    color: "var(--color-kairo-muted)",
                    textAlign: "center",
                    margin: 0
                },
                children: "You can also say “Yes” or “Cancel” by voice."
            }, void 0, false, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(ReservationSummary, "0mL63eqQh1uqHF8LNVtuZ/Xuxvs=");
_c = ReservationSummary;
function SummaryRow({ label, value, strong }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: strong ? "0.875rem" : "0.8125rem",
                    fontWeight: 500,
                    color: "var(--color-kairo-subtle)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: strong ? "1rem" : "0.875rem",
                    fontWeight: strong ? 700 : 500,
                    color: strong ? "var(--color-kairo-offwhite)" : "var(--color-kairo-subtle)"
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_c1 = SummaryRow;
function ReservationSuccess({ reservation, onDone, onUpdate }) {
    const remaining = Math.max(0, Math.floor((reservation.expiresAt.getTime() - Date.now()) / 60000));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "var(--color-kairo-charcoal)",
            border: "1px solid color-mix(in srgb, var(--color-success) 25%, transparent)",
            borderRadius: "16px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            animation: "fade-up 0.5s ease forwards"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            background: "color-mix(in srgb, var(--color-success) 15%, transparent)",
                            border: "1.5px solid var(--color-success)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--color-success)",
                            fontSize: "1.1rem",
                            fontWeight: 700
                        },
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.625rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "var(--color-success)"
                                },
                                children: "Reservation Confirmed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 700,
                                    fontSize: "1.25rem",
                                    color: "var(--color-kairo-offwhite)",
                                    letterSpacing: "0.02em",
                                    fontFamily: "monospace"
                                },
                                children: reservation.confirmationCode
                            }, void 0, false, {
                                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "1rem",
                    background: "var(--color-kairo-surface)",
                    border: "1px solid var(--color-kairo-border)",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                        label: "Item",
                        value: `${reservation.quantity} × ${reservation.productName}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                        label: "Total",
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(reservation.totalPrice)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                        label: "Pickup",
                        value: `Store #${reservation.storeId.replace("store_0", "")}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                        label: "Expires",
                        value: `in ${remaining} minutes`,
                        valueColor: "var(--color-warning)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "0.5rem"
                },
                children: [
                    1,
                    2,
                    3
                ].filter((n)=>n !== reservation.quantity).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-ghost",
                        style: {
                            fontSize: "0.8125rem",
                            padding: "0.375rem 0.875rem"
                        },
                        onClick: ()=>onUpdate(n),
                        children: [
                            "Change to ",
                            n
                        ]
                    }, n, true, {
                        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                        lineNumber: 340,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn-secondary",
                onClick: onDone,
                children: "Done"
            }, void 0, false, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
}
_c2 = ReservationSuccess;
function DetailRow({ label, value, valueColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: "0.8125rem",
                    color: "var(--color-kairo-muted)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: valueColor ?? "var(--color-kairo-offwhite)"
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reservation/ReservationFlow.tsx",
        lineNumber: 368,
        columnNumber: 5
    }, this);
}
_c3 = DetailRow;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ReservationSummary");
__turbopack_context__.k.register(_c1, "SummaryRow");
__turbopack_context__.k.register(_c2, "ReservationSuccess");
__turbopack_context__.k.register(_c3, "DetailRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/safety/SafetyEscalation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HumanHandoff",
    ()=>HumanHandoff,
    "SafetyEscalation",
    ()=>SafetyEscalation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function SafetyEscalation({ safety, onConnectStaff, onContinue, onDismiss }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "var(--color-kairo-charcoal)",
            border: "1px solid color-mix(in srgb, var(--color-warning) 30%, transparent)",
            borderRadius: "16px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            animation: "fade-up 0.4s ease forwards"
        },
        role: "alert",
        "aria-live": "assertive",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 32,
                            height: 32,
                            borderRadius: "8px",
                            background: "color-mix(in srgb, var(--color-warning) 12%, transparent)",
                            border: "1px solid color-mix(in srgb, var(--color-warning) 35%, transparent)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1rem",
                            flexShrink: 0
                        },
                        children: "⚠"
                    }, void 0, false, {
                        fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.625rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "var(--color-warning)",
                                    marginBottom: "0.25rem"
                                },
                                children: "Safety Handoff"
                            }, void 0, false, {
                                fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.9375rem",
                                    fontWeight: 500,
                                    color: "var(--color-kairo-offwhite)",
                                    lineHeight: 1.5
                                },
                                children: "I can help with product information, but I can't diagnose or recommend treatment."
                            }, void 0, false, {
                                fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.875rem",
                                    color: "var(--color-kairo-subtle)",
                                    marginTop: "0.375rem",
                                    lineHeight: 1.5
                                },
                                children: "A qualified healthcare professional should help with this."
                            }, void 0, false, {
                                fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "0.75rem",
                    background: "var(--color-kairo-surface)",
                    border: "1px solid var(--color-kairo-border)",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "0.75rem",
                            color: "var(--color-kairo-muted)"
                        },
                        children: "Reason"
                    }, void 0, false, {
                        fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            color: "var(--color-kairo-subtle)"
                        },
                        children: safety.reason
                    }, void 0, false, {
                        fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            safety.escalationAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "0.75rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        style: {
                            flex: 1
                        },
                        onClick: onConnectStaff,
                        children: "Connect to Professional"
                    }, void 0, false, {
                        fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-ghost",
                        onClick: onContinue,
                        children: "General Info"
                    }, void 0, false, {
                        fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this),
            onDismiss && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn-ghost",
                style: {
                    alignSelf: "center",
                    fontSize: "0.75rem"
                },
                onClick: onDismiss,
                children: "Dismiss"
            }, void 0, false, {
                fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "0.625rem",
                    background: "color-mix(in srgb, var(--color-success) 6%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--color-success) 18%, transparent)",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    color: "var(--color-kairo-subtle)",
                    textAlign: "center",
                    lineHeight: 1.5
                },
                children: "KAIRO is designed to know when to stop acting autonomously. Your safety always comes first."
            }, void 0, false, {
                fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = SafetyEscalation;
function HumanHandoff({ onConnect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "1rem",
            background: "var(--color-kairo-surface)",
            border: "1px solid var(--color-kairo-border)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            animation: "fade-up 0.3s ease forwards"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "0.6875rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--color-kairo-subtle)",
                            marginBottom: "0.25rem"
                        },
                        children: "Human Assistance Available"
                    }, void 0, false, {
                        fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "0.8125rem",
                            color: "var(--color-kairo-muted)"
                        },
                        children: "Estimated response · ~2 minutes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn-secondary",
                style: {
                    fontSize: "0.8125rem",
                    flexShrink: 0
                },
                onClick: onConnect,
                children: "Connect to Staff"
            }, void 0, false, {
                fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/safety/SafetyEscalation.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c1 = HumanHandoff;
var _c, _c1;
__turbopack_context__.k.register(_c, "SafetyEscalation");
__turbopack_context__.k.register(_c1, "HumanHandoff");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shell/KairoShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KairoShell",
    ()=>KairoShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock.ts [app-client] (ecmascript)");
"use client";
;
;
;
function KairoShell({ children, showNav = false, rightSlot }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            background: "var(--color-kairo-cream)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem 1.5rem",
                    borderBottom: "1px solid var(--color-kairo-border)",
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.625rem",
                            textDecoration: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "KAIRO Logo",
                                style: {
                                    width: 28,
                                    height: 28,
                                    borderRadius: 6,
                                    objectFit: "cover"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/KairoShell.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: "1.0625rem",
                                            letterSpacing: "-0.03em",
                                            color: "var(--color-kairo-offwhite)",
                                            lineHeight: 1
                                        },
                                        children: "KAIRO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shell/KairoShell.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "0.5625rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            color: "var(--color-kairo-subtle)",
                                            lineHeight: 1,
                                            marginTop: "2px"
                                        },
                                        children: "Real-Time Agentic AI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shell/KairoShell.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shell/KairoShell.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shell/KairoShell.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem"
                        },
                        children: [
                            showNav && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                style: {
                                    display: "flex",
                                    gap: "0.25rem"
                                },
                                children: [
                                    {
                                        href: "/",
                                        label: "Assistant"
                                    },
                                    {
                                        href: "/demo",
                                        label: "Demo"
                                    },
                                    {
                                        href: "/control",
                                        label: "Control"
                                    }
                                ].map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: href,
                                        style: {
                                            fontSize: "0.8125rem",
                                            fontWeight: 500,
                                            color: "var(--color-kairo-subtle)",
                                            textDecoration: "none",
                                            padding: "0.375rem 0.75rem",
                                            borderRadius: "6px",
                                            transition: "all 0.15s ease"
                                        },
                                        className: "nav-link",
                                        children: label
                                    }, href, false, {
                                        fileName: "[project]/src/components/shell/KairoShell.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/KairoShell.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            rightSlot,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreTag, {}, void 0, false, {
                                fileName: "[project]/src/components/shell/KairoShell.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shell/KairoShell.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/KairoShell.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/shell/KairoShell.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/KairoShell.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = KairoShell;
function StoreTag() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 0.75rem",
            background: "var(--color-kairo-surface)",
            border: "1px solid var(--color-kairo-border)",
            borderRadius: "8px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--color-success)",
                    boxShadow: "0 0 6px var(--color-success)",
                    flexShrink: 0,
                    display: "block"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/shell/KairoShell.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-kairo-subtle)",
                    letterSpacing: "0.02em"
                },
                children: [
                    "Store #",
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_STORE"].id.replace("store_0", ""),
                    " · ",
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_STORE"].name
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/KairoShell.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/KairoShell.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c1 = StoreTag;
var _c, _c1;
__turbopack_context__.k.register(_c, "KairoShell");
__turbopack_context__.k.register(_c1, "StoreTag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/voice-powered-orb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoicePoweredOrb",
    ()=>VoicePoweredOrb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/math/Vec3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const VoicePoweredOrb = ({ className, hue = 0, enableVoiceControl = true, voiceSensitivity = 1.5, maxRotationSpeed = 1.2, maxHoverIntensity = 0.8, onVoiceDetected, externalStream = null })=>{
    _s();
    const ctnDom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const microphoneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dataArrayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const mediaStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Track whether we own the stream (for cleanup)
    const ownsStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const vert = /* glsl */ `
    precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;
    const frag = /* glsl */ `
    precision highp float;

    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    varying vec2 vUv;

    vec3 rgb2yiq(vec3 c) {
      float y = dot(c, vec3(0.299, 0.587, 0.114));
      float i = dot(c, vec3(0.596, -0.274, -0.322));
      float q = dot(c, vec3(0.211, -0.523, 0.312));
      return vec3(y, i, q);
    }

    vec3 yiq2rgb(vec3 c) {
      float r = c.x + 0.956 * c.y + 0.621 * c.z;
      float g = c.x - 0.272 * c.y - 0.647 * c.z;
      float b = c.x - 1.106 * c.y + 1.703 * c.z;
      return vec3(r, g, b);
    }

    vec3 adjustHue(vec3 color, float hueDeg) {
      float hueRad = hueDeg * 3.14159265 / 180.0;
      vec3 yiq = rgb2yiq(color);
      float cosA = cos(hueRad);
      float sinA = sin(hueRad);
      float i = yiq.y * cosA - yiq.z * sinA;
      float q = yiq.y * sinA + yiq.z * cosA;
      yiq.y = i;
      yiq.z = q;
      return yiq2rgb(yiq);
    }

    vec3 hash33(vec3 p3) {
      p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
      p3 += dot(p3, p3.yxz + 19.19);
      return -1.0 + 2.0 * fract(vec3(
        p3.x + p3.y,
        p3.x + p3.z,
        p3.y + p3.z
      ) * p3.zyx);
    }

    float snoise3(vec3 p) {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;
      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
      vec3 e = step(vec3(0.0), d0 - d0.yzx);
      vec3 i1 = e * (1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy * (1.0 - e);
      vec3 d1 = d0 - (i1 - K2);
      vec3 d2 = d0 - (i2 - K1);
      vec3 d3 = d0 - 0.5;
      vec4 h = max(0.6 - vec4(
        dot(d0, d0),
        dot(d1, d1),
        dot(d2, d2),
        dot(d3, d3)
      ), 0.0);
      vec4 n = h * h * h * h * vec4(
        dot(d0, hash33(i)),
        dot(d1, hash33(i + i1)),
        dot(d2, hash33(i + i2)),
        dot(d3, hash33(i + 1.0))
      );
      return dot(vec4(31.316), n);
    }

    vec4 extractAlpha(vec3 colorIn) {
      float a = max(max(colorIn.r, colorIn.g), colorIn.b);
      return vec4(colorIn.rgb / (a + 1e-5), a);
    }

    const vec3 baseColor1 = vec3(0.611765, 0.262745, 0.996078);
    const vec3 baseColor2 = vec3(0.298039, 0.760784, 0.913725);
    const vec3 baseColor3 = vec3(0.062745, 0.078431, 0.600000);
    const float innerRadius = 0.6;
    const float noiseScale = 0.65;

    float light1(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * attenuation);
    }

    float light2(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * dist * attenuation);
    }

    vec4 draw(vec2 uv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);

      float ang = atan(uv.y, uv.x);
      float len = length(uv);
      float invLen = len > 0.0 ? 1.0 / len : 0.0;

      float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)) * 0.5 + 0.5;
      float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
      float d0 = distance(uv, (r0 * invLen) * uv);
      float v0 = light1(1.0, 10.0, d0);
      v0 *= smoothstep(r0 * 1.05, r0, len);
      float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;

      float a = iTime * -1.0;
      vec2 pos = vec2(cos(a), sin(a)) * r0;
      float d = distance(uv, pos);
      float v1 = light2(1.5, 5.0, d);
      v1 *= light1(1.0, 50.0, d0);

      float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
      float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);

      vec3 col = mix(color1, color2, cl);
      col = mix(color3, col, v0);
      col = (col + v1) * v2 * v3;
      col = clamp(col, 0.0, 1.0);

      return extractAlpha(col);
    }

    vec4 mainImage(vec2 fragCoord) {
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord - center) / size * 2.0;

      float angle = rot;
      float s = sin(angle);
      float c = cos(angle);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);

      uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
      uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);

      return draw(uv);
    }

    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec4 col = mainImage(fragCoord);
      gl_FragColor = vec4(col.rgb * col.a, col.a);
    }
  `;
    // Voice analysis function
    const analyzeAudio = ()=>{
        if (!analyserRef.current || !dataArrayRef.current) return 0;
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        // Calculate RMS (Root Mean Square) for better voice detection
        let sum = 0;
        for(let i = 0; i < dataArrayRef.current.length; i++){
            const value = dataArrayRef.current[i] / 255;
            sum += value * value;
        }
        const rms = Math.sqrt(sum / dataArrayRef.current.length);
        // Apply sensitivity and boost the signal
        const level = Math.min(rms * voiceSensitivity * 3.0, 1);
        return level;
    };
    // Stop microphone and cleanup
    const stopMicrophone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoicePoweredOrb.useCallback[stopMicrophone]": ()=>{
            try {
                // Stop animation frame
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                    animationFrameRef.current = undefined;
                }
                // Only stop tracks if we own the stream (not using external stream)
                if (ownsStreamRef.current && mediaStreamRef.current) {
                    mediaStreamRef.current.getTracks().forEach({
                        "VoicePoweredOrb.useCallback[stopMicrophone]": (track)=>{
                            track.stop();
                        }
                    }["VoicePoweredOrb.useCallback[stopMicrophone]"]);
                    mediaStreamRef.current = null;
                    ownsStreamRef.current = false;
                }
                // Disconnect and cleanup audio nodes
                if (microphoneRef.current) {
                    microphoneRef.current.disconnect();
                    microphoneRef.current = null;
                }
                if (analyserRef.current) {
                    analyserRef.current.disconnect();
                    analyserRef.current = null;
                }
                // Close audio context
                if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
                    audioContextRef.current.close();
                    audioContextRef.current = null;
                }
                dataArrayRef.current = null;
                console.log('Microphone stopped and cleaned up');
            } catch (error) {
                console.warn('Error stopping microphone:', error);
            }
        }
    }["VoicePoweredOrb.useCallback[stopMicrophone]"], []);
    // Initialize microphone access
    const initMicrophone = async ()=>{
        try {
            // Clean up any existing microphone first
            stopMicrophone();
            let stream;
            if (externalStream) {
                // Use external stream (shared with useSession)
                stream = externalStream;
                ownsStreamRef.current = false;
                console.log('Using external MediaStream for visualization');
            } else {
                // Create our own stream (fallback)
                stream = await navigator.mediaDevices.getUserMedia({
                    audio: {
                        echoCancellation: false,
                        noiseSuppression: false,
                        autoGainControl: false,
                        sampleRate: 44100
                    }
                });
                ownsStreamRef.current = true;
                console.log('Created own MediaStream for visualization');
            }
            // Store the stream reference for cleanup
            mediaStreamRef.current = stream;
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            // Resume audio context if needed
            if (audioContextRef.current.state === 'suspended') {
                await audioContextRef.current.resume();
            }
            analyserRef.current = audioContextRef.current.createAnalyser();
            microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
            // Optimize for voice detection
            analyserRef.current.fftSize = 512; // Higher resolution
            analyserRef.current.smoothingTimeConstant = 0.3; // Less smoothing for responsiveness
            analyserRef.current.minDecibels = -90;
            analyserRef.current.maxDecibels = -10;
            microphoneRef.current.connect(analyserRef.current);
            dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);
            console.log('Microphone initialized successfully');
            return true;
        } catch (error) {
            console.warn("Microphone access denied or not available:", error);
            return false;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoicePoweredOrb.useEffect": ()=>{
            const container = ctnDom.current;
            if (!container) return;
            let rendererInstance = null;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let glContext = null;
            let rafId;
            let program = null;
            try {
                rendererInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                    alpha: true,
                    premultipliedAlpha: false,
                    antialias: true,
                    dpr: window.devicePixelRatio || 1
                });
                glContext = rendererInstance.gl;
                // Set clear color to transparent to avoid white flash
                glContext.clearColor(0, 0, 0, 0);
                // Enable alpha blending for proper transparency
                glContext.enable(glContext.BLEND);
                glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
                // Clear any existing canvas
                while(container.firstChild){
                    container.removeChild(container.firstChild);
                }
                // canvas could be OffscreenCanvas, cast to HTMLCanvasElement for DOM operations
                const canvas = glContext.canvas;
                container.appendChild(canvas);
                const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](glContext);
                program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](glContext, {
                    vertex: vert,
                    fragment: frag,
                    uniforms: {
                        iTime: {
                            value: 0
                        },
                        iResolution: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vec3"](glContext.canvas.width, glContext.canvas.height, glContext.canvas.width / glContext.canvas.height)
                        },
                        hue: {
                            value: hue
                        },
                        hover: {
                            value: 0
                        },
                        rot: {
                            value: 0
                        },
                        hoverIntensity: {
                            value: 0
                        }
                    }
                });
                const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](glContext, {
                    geometry,
                    program
                });
                const resize = {
                    "VoicePoweredOrb.useEffect.resize": ()=>{
                        if (!container || !rendererInstance || !glContext) return;
                        const dpr = window.devicePixelRatio || 1;
                        const width = container.clientWidth;
                        const height = container.clientHeight;
                        if (width === 0 || height === 0) return;
                        rendererInstance.setSize(width * dpr, height * dpr);
                        glContext.canvas.style.width = width + "px";
                        glContext.canvas.style.height = height + "px";
                        if (program) {
                            program.uniforms.iResolution.value.set(glContext.canvas.width, glContext.canvas.height, glContext.canvas.width / glContext.canvas.height);
                        }
                    }
                }["VoicePoweredOrb.useEffect.resize"];
                window.addEventListener("resize", resize);
                resize();
                let lastTime = 0;
                let currentRot = 0;
                let voiceLevel = 0;
                const baseRotationSpeed = 0.3;
                let isMicrophoneInitialized = false;
                // Initialize or stop microphone based on voice control setting
                if (enableVoiceControl) {
                    initMicrophone().then({
                        "VoicePoweredOrb.useEffect": (success)=>{
                            isMicrophoneInitialized = success;
                        }
                    }["VoicePoweredOrb.useEffect"]);
                } else {
                    // Stop microphone when voice control is disabled
                    stopMicrophone();
                    isMicrophoneInitialized = false;
                }
                const update = {
                    "VoicePoweredOrb.useEffect.update": (t)=>{
                        rafId = requestAnimationFrame(update);
                        if (!program) return;
                        const dt = (t - lastTime) * 0.001;
                        lastTime = t;
                        program.uniforms.iTime.value = t * 0.001;
                        program.uniforms.hue.value = hue;
                        // Handle voice input
                        if (enableVoiceControl && isMicrophoneInitialized) {
                            voiceLevel = analyzeAudio();
                            // Notify parent component about voice detection
                            if (onVoiceDetected) {
                                onVoiceDetected(voiceLevel > 0.1);
                            }
                            // Map voice level to rotation speed with more visible effect
                            const voiceRotationSpeed = baseRotationSpeed + voiceLevel * maxRotationSpeed * 2.0;
                            // Always rotate when there's voice input, even at low levels
                            if (voiceLevel > 0.05) {
                                currentRot += dt * voiceRotationSpeed;
                            }
                            // Use voice level to drive hover effects for visual feedback
                            program.uniforms.hover.value = Math.min(voiceLevel * 2.0, 1.0);
                            program.uniforms.hoverIntensity.value = Math.min(voiceLevel * maxHoverIntensity * 0.8, maxHoverIntensity);
                        } else {
                            // Keep effects at 0 when not using voice control
                            program.uniforms.hover.value = 0;
                            program.uniforms.hoverIntensity.value = 0;
                            if (onVoiceDetected) {
                                onVoiceDetected(false);
                            }
                        }
                        program.uniforms.rot.value = currentRot;
                        if (rendererInstance && glContext) {
                            // Clear the canvas with transparent background before rendering
                            glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT);
                            rendererInstance.render({
                                scene: mesh
                            });
                        }
                    }
                }["VoicePoweredOrb.useEffect.update"];
                rafId = requestAnimationFrame(update);
                return ({
                    "VoicePoweredOrb.useEffect": ()=>{
                        cancelAnimationFrame(rafId);
                        window.removeEventListener("resize", resize);
                        // Clean up canvas safely
                        if (container && glContext && glContext.canvas) {
                            try {
                                if (container.contains(glContext.canvas)) {
                                    container.removeChild(glContext.canvas);
                                }
                            } catch (error) {
                                console.warn("Canvas cleanup error:", error);
                            }
                        }
                        // Stop microphone and clean up audio resources
                        stopMicrophone();
                        if (glContext) {
                            glContext.getExtension("WEBGL_lose_context")?.loseContext();
                        }
                    }
                })["VoicePoweredOrb.useEffect"];
            } catch (error) {
                console.error("Error initializing Voice Powered Orb:", error);
                if (container && container.firstChild) {
                    container.removeChild(container.firstChild);
                }
                return ({
                    "VoicePoweredOrb.useEffect": ()=>{
                        window.removeEventListener("resize", {
                            "VoicePoweredOrb.useEffect": ()=>{}
                        }["VoicePoweredOrb.useEffect"]);
                    }
                })["VoicePoweredOrb.useEffect"];
            }
        }
    }["VoicePoweredOrb.useEffect"], [
        hue,
        enableVoiceControl,
        voiceSensitivity,
        maxRotationSpeed,
        maxHoverIntensity,
        vert,
        frag
    ]);
    // Handle microphone state changes separately
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoicePoweredOrb.useEffect": ()=>{
            let isMounted = true;
            const handleMicrophoneState = {
                "VoicePoweredOrb.useEffect.handleMicrophoneState": async ()=>{
                    if (enableVoiceControl) {
                        const success = await initMicrophone();
                        if (!isMounted) return;
                    // Update the microphone state in the WebGL context if needed
                    } else {
                        stopMicrophone();
                    }
                }
            }["VoicePoweredOrb.useEffect.handleMicrophoneState"];
            handleMicrophoneState();
            return ({
                "VoicePoweredOrb.useEffect": ()=>{
                    isMounted = false;
                // Don't stop microphone here as it will be handled by the main cleanup
                }
            })["VoicePoweredOrb.useEffect"];
        }
    }["VoicePoweredOrb.useEffect"], [
        enableVoiceControl
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ctnDom,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full relative", className)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/voice-powered-orb.tsx",
        lineNumber: 526,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VoicePoweredOrb, "HfJRF3kLL2lcmP11AgsFr9QDNX8=");
_c = VoicePoweredOrb;
var _c;
__turbopack_context__.k.register(_c, "VoicePoweredOrb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voice/VoiceCore.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceCore",
    ()=>VoiceCore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$voice$2d$powered$2d$orb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/voice-powered-orb.tsx [app-client] (ecmascript)");
"use client";
;
;
// Color map per state (We'll map these colors to hue for the orb roughly)
const STATE_CONFIG = {
    idle: {
        hue: 0,
        label: "Ready when you are."
    },
    listening: {
        hue: 180,
        label: "Listening..."
    },
    thinking: {
        hue: 30,
        label: "Understanding your request..."
    },
    tool_running: {
        hue: 45,
        label: "Checking live data..."
    },
    speaking: {
        hue: 190,
        label: "KAIRO is responding..."
    },
    action: {
        hue: 20,
        label: "Completing action..."
    },
    success: {
        hue: 120,
        label: "Done."
    },
    error: {
        hue: -10,
        label: "Something went wrong."
    }
};
function VoiceCore({ state, size = 200, audioStream = null }) {
    const config = STATE_CONFIG[state];
    // Only enable voice control when listening
    const enableVoiceControl = state === "listening";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            userSelect: "none"
        },
        role: "status",
        "aria-label": config.label,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: size,
                    height: size
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$voice$2d$powered$2d$orb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoicePoweredOrb"], {
                    enableVoiceControl: enableVoiceControl,
                    hue: config.hue,
                    externalStream: audioStream
                }, void 0, false, {
                    fileName: "[project]/src/components/voice/VoiceCore.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/voice/VoiceCore.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: "1.0625rem",
                        fontWeight: 500,
                        color: "var(--color-kairo-offwhite)",
                        letterSpacing: "-0.01em",
                        transition: "color 0.3s ease"
                    },
                    children: config.label
                }, void 0, false, {
                    fileName: "[project]/src/components/voice/VoiceCore.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/voice/VoiceCore.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voice/VoiceCore.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c = VoiceCore;
var _c;
__turbopack_context__.k.register(_c, "VoiceCore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voice/WaveformBars.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WaveformBars",
    ()=>WaveformBars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function WaveformBars({ state, barCount = 32, height = 48, width = 240 }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const phaseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isActive = state === "listening" || state === "speaking";
    const isBusy = state === "thinking" || state === "tool_running" || state === "action";
    const activeColor = state === "listening" ? "var(--color-pulse)" : state === "speaking" ? "var(--color-pulse-light)" : state === "thinking" || state === "tool_running" || state === "action" ? "var(--color-signal)" : state === "success" ? "var(--color-success)" : state === "error" ? "var(--color-error)" : "var(--color-kairo-muted)";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveformBars.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const W = canvas.width;
            const H = canvas.height;
            const barW = W / barCount - 2;
            const gap = 2;
            function getColor() {
                // Resolve CSS var to an actual color string we can use in canvas
                // Use a lookup since CSS vars are resolved per-element
                const map = {
                    idle: "#8b7d6b",
                    listening: "#00b8cc",
                    thinking: "#e8450a",
                    tool_running: "#e8a000",
                    speaking: "#00b8cc",
                    action: "#e8450a",
                    success: "#1e8a3a",
                    error: "#dc2626"
                };
                return map[state];
            }
            function draw() {
                if (!ctx) return;
                ctx.clearRect(0, 0, W, H);
                const color = getColor();
                const alpha = isActive ? 0.85 : isBusy ? 0.6 : 0.25;
                for(let i = 0; i < barCount; i++){
                    let barHeight;
                    if (isActive) {
                        const wave1 = Math.sin(i * 0.4 + phaseRef.current * 0.08) * 0.5;
                        const wave2 = Math.sin(i * 0.9 + phaseRef.current * 0.12) * 0.3;
                        const rand = (Math.random() - 0.5) * 0.2;
                        barHeight = H * (0.15 + (wave1 + wave2 + rand + 1) * 0.35);
                    } else if (isBusy) {
                        const wave = Math.sin(i * 0.5 + phaseRef.current * 0.05) * 0.5 + 0.5;
                        barHeight = H * (0.1 + wave * 0.3);
                    } else {
                        barHeight = H * (0.08 + Math.sin(i * 0.6) * 0.04);
                    }
                    const x = i * (barW + gap);
                    const y = (H - barHeight) / 2;
                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.roundRect(x, y, barW, barHeight, barW / 2);
                    ctx.fill();
                }
                ctx.globalAlpha = 1;
                phaseRef.current += 1;
                animRef.current = requestAnimationFrame(draw);
            }
            draw();
            return ({
                "WaveformBars.useEffect": ()=>cancelAnimationFrame(animRef.current)
            })["WaveformBars.useEffect"];
        }
    }["WaveformBars.useEffect"], [
        state,
        barCount,
        isActive,
        isBusy
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            width: width,
            height: height,
            style: {
                display: "block"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/voice/WaveformBars.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/voice/WaveformBars.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(WaveformBars, "iQTFzaJvAscIItpAohx9JSjWUBE=");
_c = WaveformBars;
var _c;
__turbopack_context__.k.register(_c, "WaveformBars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/mock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DATA_SOURCES",
    ()=>DATA_SOURCES,
    "DEMO_SCENARIOS",
    ()=>DEMO_SCENARIOS,
    "MOCK_INVENTORY",
    ()=>MOCK_INVENTORY,
    "MOCK_PRODUCTS",
    ()=>MOCK_PRODUCTS,
    "MOCK_STORE",
    ()=>MOCK_STORE,
    "createMockReservation",
    ()=>createMockReservation
]);
const MOCK_PRODUCTS = [
    {
        id: "prod_001",
        name: "Strawberry Milk",
        nameHindi: "स्ट्रॉबेरी दूध",
        description: "Real strawberry extract, low sugar, cold-pressed milk",
        price: 65,
        currency: "INR",
        category: "beverages",
        subcategory: "dairy",
        attributes: [
            "Low sugar",
            "Cold",
            "Non-carbonated",
            "Chilled"
        ],
        imageEmoji: "🍓",
        aisle: "Aisle 2",
        section: "Refrigerated Drinks",
        isRecommended: true,
        matchReasons: [
            "Under ₹70",
            "Cold",
            "Low sugar",
            "Available now"
        ]
    },
    {
        id: "prod_002",
        name: "Peach Iced Tea",
        nameHindi: "पीच आइस्ड टी",
        description: "Lightly sweetened peach blend, zero artificial flavors",
        price: 55,
        currency: "INR",
        category: "beverages",
        subcategory: "tea",
        attributes: [
            "Light sweetness",
            "Cold",
            "Non-carbonated",
            "Chilled"
        ],
        imageEmoji: "🍑",
        aisle: "Aisle 2",
        section: "Refrigerated Drinks",
        isRecommended: false,
        matchReasons: [
            "Under ₹70",
            "Cold",
            "Low sweetness"
        ]
    },
    {
        id: "prod_003",
        name: "Zero Sugar Cola",
        description: "Classic cola taste, zero calories, extra carbonated",
        price: 60,
        currency: "INR",
        category: "beverages",
        subcategory: "soda",
        attributes: [
            "Zero sugar",
            "Carbonated",
            "Cold"
        ],
        imageEmoji: "🥤",
        aisle: "Aisle 1",
        section: "Fizzy Drinks",
        isRecommended: false,
        matchReasons: [
            "Under ₹70",
            "Cold",
            "Zero sugar"
        ]
    },
    {
        id: "prod_004",
        name: "Protein Cocoa Drink",
        description: "Dark chocolate, 20g protein, no added sugar",
        price: 95,
        currency: "INR",
        category: "beverages",
        subcategory: "protein",
        attributes: [
            "High protein",
            "Low sugar",
            "Cold"
        ],
        imageEmoji: "🍫",
        aisle: "Aisle 3",
        section: "Health Drinks",
        isRecommended: false,
        matchReasons: [
            "Cold",
            "Low sugar"
        ]
    },
    {
        id: "prod_005",
        name: "Green Apple Sparkling",
        description: "Crisp green apple, lightly carbonated, low calories",
        price: 58,
        currency: "INR",
        category: "beverages",
        subcategory: "sparkling",
        attributes: [
            "Low calorie",
            "Lightly carbonated",
            "Cold"
        ],
        imageEmoji: "🍏",
        aisle: "Aisle 1",
        section: "Fizzy Drinks",
        isRecommended: false,
        matchReasons: [
            "Under ₹70",
            "Cold"
        ]
    },
    {
        id: "prod_006",
        name: "Lychee Coconut Water",
        description: "Natural electrolytes, lychee flavored, 100% natural",
        price: 68,
        currency: "INR",
        category: "beverages",
        subcategory: "water",
        attributes: [
            "Natural",
            "Low sugar",
            "Cold",
            "Hydrating"
        ],
        imageEmoji: "🥥",
        aisle: "Aisle 2",
        section: "Refrigerated Drinks",
        isRecommended: false,
        matchReasons: [
            "Under ₹70",
            "Cold",
            "Low sugar"
        ]
    }
];
const MOCK_INVENTORY = {
    prod_001: {
        productId: "prod_001",
        storeId: "store_042",
        quantity: 6,
        lastUpdated: new Date(),
        status: "available"
    },
    prod_002: {
        productId: "prod_002",
        storeId: "store_042",
        quantity: 8,
        lastUpdated: new Date(),
        status: "available"
    },
    prod_003: {
        productId: "prod_003",
        storeId: "store_042",
        quantity: 12,
        lastUpdated: new Date(),
        status: "available"
    },
    prod_004: {
        productId: "prod_004",
        storeId: "store_042",
        quantity: 2,
        lastUpdated: new Date(),
        status: "low_stock"
    },
    prod_005: {
        productId: "prod_005",
        storeId: "store_042",
        quantity: 0,
        lastUpdated: new Date(),
        status: "out_of_stock"
    },
    prod_006: {
        productId: "prod_006",
        storeId: "store_042",
        quantity: 5,
        lastUpdated: new Date(),
        status: "available"
    }
};
const MOCK_STORE = {
    id: "store_042",
    name: "Hatiara Central",
    address: "Plot 42, Hatiara Main Road, Kolkata — 700157",
    isOpen: true,
    openTime: "06:00",
    closeTime: "23:00"
};
const DEMO_SCENARIOS = [
    {
        id: "product_discovery",
        label: "Product Discovery",
        description: "Cold drink under ₹70, not too sweet",
        triggerPhrase: "I need a cold drink under ₹70, preferably not too sweet."
    },
    {
        id: "low_stock",
        label: "Low Stock & Alternatives",
        description: "Item unavailable, find alternatives",
        triggerPhrase: "Do you have Mango Lassi?"
    },
    {
        id: "reservation",
        label: "Reservation Flow",
        description: "Reserve an item, confirm, update",
        triggerPhrase: "Reserve one Strawberry Milk please."
    },
    {
        id: "safety_escalation",
        label: "Safety Escalation",
        description: "Healthcare-related request handling",
        triggerPhrase: "What medicine should I take for chest pain?"
    }
];
function createMockReservation(product, quantity) {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 30 * 60 * 1000); // 30 min
    const code = `KAIRO-${Math.floor(1000 + Math.random() * 9000)}`;
    return {
        id: `rsv_${Date.now()}`,
        productId: product.id,
        productName: product.name,
        quantity,
        unitPrice: product.price,
        totalPrice: product.price * quantity,
        storeId: MOCK_STORE.id,
        storeName: MOCK_STORE.name,
        createdAt: now,
        expiresAt,
        status: "confirmed",
        confirmationCode: code
    };
}
const DATA_SOURCES = [
    {
        id: "catalog",
        label: "Product Catalog",
        status: "demo"
    },
    {
        id: "inventory",
        label: "Inventory",
        status: "demo"
    },
    {
        id: "reservation",
        label: "Reservation Service",
        status: "demo"
    },
    {
        id: "voice",
        label: "Voice Engine",
        status: "connected"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSession",
    ()=>useSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Audio processing utilities
const TARGET_SAMPLE_RATE = 16000;
const CHUNK_INTERVAL_MS = 250;
/**
 * Resample audio buffer from source sample rate to target sample rate
 */ async function resampleAudioBuffer(audioBuffer, targetSampleRate) {
    const sourceSampleRate = audioBuffer.sampleRate;
    if (sourceSampleRate === targetSampleRate) {
        return audioBuffer;
    }
    const offlineContext = new OfflineAudioContext(audioBuffer.numberOfChannels, Math.ceil(audioBuffer.duration * targetSampleRate), targetSampleRate);
    const source = offlineContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(offlineContext.destination);
    source.start(0);
    return offlineContext.startRendering();
}
/**
 * Convert AudioBuffer to 16-bit PCM bytes
 */ function audioBufferToPcm16(audioBuffer) {
    const numChannels = audioBuffer.numberOfChannels;
    const length = audioBuffer.length;
    const result = new Uint8Array(length * numChannels * 2); // 16-bit = 2 bytes per sample
    let offset = 0;
    for(let i = 0; i < length; i++){
        for(let channel = 0; channel < numChannels; channel++){
            const sample = Math.max(-1, Math.min(1, audioBuffer.getChannelData(channel)[i]));
            const int16 = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
            result[offset++] = int16 & 0xff;
            result[offset++] = int16 >> 8 & 0xff;
        }
    }
    return result;
}
/**
 * Convert WebM/Opus blob to PCM16 at target sample rate
 */ async function convertWebMToPcm16(webmBlob, targetSampleRate = TARGET_SAMPLE_RATE) {
    const arrayBuffer = await webmBlob.arrayBuffer();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)({
        sampleRate: targetSampleRate
    });
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
function createInitialState() {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
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
            sessionDurationSeconds: 0
        }
    };
}
function useSession() {
    _s();
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(createInitialState);
    const eventSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [backendSessionId, setBackendSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const voiceWsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [audioStream, setAudioStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[update]": (partial)=>setSession({
                "useSession.useCallback[update]": (prev)=>({
                        ...prev,
                        ...partial
                    })
            }["useSession.useCallback[update]"])
    }["useSession.useCallback[update]"], []);
    const setVoiceState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[setVoiceState]": (status, agentState)=>setSession({
                "useSession.useCallback[setVoiceState]": (prev)=>({
                        ...prev,
                        status,
                        agentState: agentState ?? prev.agentState
                    })
            }["useSession.useCallback[setVoiceState]"])
    }["useSession.useCallback[setVoiceState]"], []);
    const addTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[addTranscript]": (speaker, text)=>{
            const entry = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
                speaker,
                text,
                timestamp: new Date()
            };
            setSession({
                "useSession.useCallback[addTranscript]": (prev)=>({
                        ...prev,
                        transcript: [
                            ...prev.transcript,
                            entry
                        ]
                    })
            }["useSession.useCallback[addTranscript]"]);
            return entry;
        }
    }["useSession.useCallback[addTranscript]"], []);
    const cleanupSSE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[cleanupSSE]": ()=>{
            if (eventSourceRef.current) {
                eventSourceRef.current.close();
                eventSourceRef.current = null;
            }
        }
    }["useSession.useCallback[cleanupSSE]"], []);
    const resetSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[resetSession]": ()=>{
            cleanupSSE();
            setBackendSessionId(null);
            setSession(createInitialState());
        }
    }["useSession.useCallback[resetSession]"], [
        cleanupSSE
    ]);
    const startSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[startSession]": async ()=>{
            try {
                setVoiceState("listening", "IDLE");
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].createSession({
                    store_id: "store-042",
                    language: "en"
                });
                const sessionId = res.id;
                setBackendSessionId(sessionId);
                // Connect SSE
                cleanupSSE();
                const sse = new EventSource(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getEventStreamURL(sessionId));
                eventSourceRef.current = sse;
                sse.onmessage = ({
                    "useSession.useCallback[startSession]": (event)=>{
                        try {
                            const data = JSON.parse(event.data);
                            handleBackendEvent(data);
                        } catch (e) {
                            console.error("Failed to parse SSE event:", e);
                        }
                    }
                })["useSession.useCallback[startSession]"];
                sse.onerror = ({
                    "useSession.useCallback[startSession]": (error)=>{
                        console.error("SSE Error:", error);
                    }
                })["useSession.useCallback[startSession]"];
                return sessionId;
            } catch (error) {
                console.error("Failed to start session:", error);
                setSession({
                    "useSession.useCallback[startSession]": (prev)=>({
                            ...prev,
                            error: "Failed to connect to backend"
                        })
                }["useSession.useCallback[startSession]"]);
                throw error;
            }
        }
    }["useSession.useCallback[startSession]"], [
        cleanupSSE,
        setVoiceState
    ]);
    const handleBackendEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[handleBackendEvent]": (eventData)=>{
            const { type, payload } = eventData;
            switch(type){
                case "AGENT_THINKING":
                    setVoiceState("thinking", "UNDERSTANDING");
                    break;
                case "AGENT_SPEAKING":
                    setVoiceState("speaking", "RESPONDING");
                    if (payload?.response) {
                        addTranscript("kairo", payload.response);
                    }
                    setTimeout({
                        "useSession.useCallback[handleBackendEvent]": ()=>setVoiceState("idle", "IDLE")
                    }["useSession.useCallback[handleBackendEvent]"], 3000);
                    break;
                case "TOOL_STARTED":
                    setVoiceState("tool_running", "TOOL_EXECUTION");
                    setSession({
                        "useSession.useCallback[handleBackendEvent]": (prev)=>({
                                ...prev,
                                activities: [
                                    ...prev.activities,
                                    {
                                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
                                        label: `Running ${payload.tool}...`,
                                        status: "active",
                                        timestamp: new Date()
                                    }
                                ]
                            })
                    }["useSession.useCallback[handleBackendEvent]"]);
                    break;
                case "TOOL_COMPLETED":
                    setVoiceState("thinking", "PLANNING");
                    if (payload?.tool === "search_products" && payload.output?.products) {
                        const frontendProducts = payload.output.products.map({
                            "useSession.useCallback[handleBackendEvent].frontendProducts": (p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertBackendProduct"])(p)
                        }["useSession.useCallback[handleBackendEvent].frontendProducts"]);
                        setSession({
                            "useSession.useCallback[handleBackendEvent]": (prev)=>({
                                    ...prev,
                                    products: frontendProducts,
                                    activities: prev.activities.map({
                                        "useSession.useCallback[handleBackendEvent]": (a, i)=>i === prev.activities.length - 1 ? {
                                                ...a,
                                                status: "complete"
                                            } : a
                                    }["useSession.useCallback[handleBackendEvent]"])
                                })
                        }["useSession.useCallback[handleBackendEvent]"]);
                    }
                    break;
                case "ESCALATION_REQUIRED":
                    setVoiceState("speaking", "ESCALATION");
                    setSession({
                        "useSession.useCallback[handleBackendEvent]": (prev)=>({
                                ...prev,
                                safetyState: {
                                    triggered: true,
                                    reason: payload.reason,
                                    category: payload.category,
                                    escalationAvailable: true
                                }
                            })
                    }["useSession.useCallback[handleBackendEvent]"]);
                    addTranscript("kairo", "I can help with product information, but I can't diagnose or recommend treatment. A qualified healthcare professional should help with this.");
                    break;
                default:
                    console.log("Unhandled backend event:", type, payload);
            }
        }
    }["useSession.useCallback[handleBackendEvent]"], [
        setVoiceState,
        addTranscript
    ]);
    const runProductDiscovery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[runProductDiscovery]": async (userInput)=>{
            let currentSessionId = backendSessionId;
            if (!currentSessionId) {
                currentSessionId = await startSession();
            }
            if (!currentSessionId) return; // Still failed to start
            addTranscript("user", userInput);
            setVoiceState("thinking", "UNDERSTANDING");
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].sendMessage({
                    session_id: currentSessionId,
                    message: userInput
                });
            } catch (e) {
                console.error("Failed to send message:", e);
            }
        }
    }["useSession.useCallback[runProductDiscovery]"], [
        backendSessionId,
        startSession,
        addTranscript,
        setVoiceState
    ]);
    const runReservation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[runReservation]": async (product, quantity)=>{
            if (!backendSessionId) return;
            setVoiceState("action", "TOOL_EXECUTION");
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].prepareReservation({
                    session_id: backendSessionId,
                    store_id: "store-042",
                    items: [
                        {
                            product_id: product.id,
                            quantity,
                            unit_price: product.price
                        }
                    ]
                });
                const confirmation = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].confirmReservation({
                    reservation_id: res.reservation_id
                });
                const frontendReservation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertBackendReservation"])(confirmation);
                setSession({
                    "useSession.useCallback[runReservation]": (prev)=>({
                            ...prev,
                            reservation: frontendReservation,
                            status: "success",
                            agentState: "ACTION_COMPLETE"
                        })
                }["useSession.useCallback[runReservation]"]);
                addTranscript("kairo", `Done. Reserved ${quantity} ${product.name}. Your code is ${frontendReservation.confirmationCode}.`);
            } catch (e) {
                console.error("Reservation failed:", e);
            }
        }
    }["useSession.useCallback[runReservation]"], [
        backendSessionId,
        setVoiceState,
        addTranscript
    ]);
    const updateReservation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[updateReservation]": async (reservation, newQuantity)=>{
            if (!backendSessionId) return;
            setVoiceState("action", "TOOL_EXECUTION");
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].updateReservation({
                    reservation_id: reservation.id,
                    product_id: reservation.productId,
                    new_quantity: newQuantity
                });
                setSession({
                    "useSession.useCallback[updateReservation]": (prev)=>({
                            ...prev,
                            reservation: {
                                ...reservation,
                                quantity: newQuantity
                            },
                            status: "success",
                            agentState: "ACTION_COMPLETE"
                        })
                }["useSession.useCallback[updateReservation]"]);
                addTranscript("kairo", `Updated to ${newQuantity} ${reservation.productName}.`);
            } catch (e) {
                console.error("Update reservation failed", e);
            }
        }
    }["useSession.useCallback[updateReservation]"], [
        backendSessionId,
        setVoiceState,
        addTranscript
    ]);
    const runLowStockAlternatives = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[runLowStockAlternatives]": async ()=>{
            runProductDiscovery("Do you have Mango Lassi?");
        }
    }["useSession.useCallback[runLowStockAlternatives]"], [
        runProductDiscovery
    ]);
    const startListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[startListening]": async ()=>{
            let currentSessionId = backendSessionId;
            if (!currentSessionId) {
                currentSessionId = await startSession();
            }
            if (!currentSessionId) return;
            setVoiceState("listening", "LISTENING");
            let stream = null;
            let ws = null;
            let mediaRecorder = null;
            try {
                // Request microphone access with specific constraints for better quality
                stream = await navigator.mediaDevices.getUserMedia({
                    audio: {
                        echoCancellation: true,
                        noiseSuppression: true,
                        autoGainControl: true,
                        sampleRate: 48000,
                        channelCount: 1
                    }
                });
                audioStreamRef.current = stream;
                setAudioStream(stream);
                const wsUrl = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getVoiceWebSocketURL(currentSessionId).replace("http", "ws");
                ws = new WebSocket(wsUrl);
                voiceWsRef.current = ws;
                // Set up WebSocket event handlers BEFORE opening
                ws.onopen = ({
                    "useSession.useCallback[startListening]": ()=>{
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
                            mediaRecorder.ondataavailable = ({
                                "useSession.useCallback[startListening]": async (event)=>{
                                    if (event.data.size > 0 && ws?.readyState === WebSocket.OPEN) {
                                        try {
                                            // Convert WebM/Opus to PCM16 at 16kHz for Deepgram
                                            const pcm16 = await convertWebMToPcm16(event.data, TARGET_SAMPLE_RATE);
                                            // Convert to base64
                                            const base64 = btoa(String.fromCharCode(...pcm16));
                                            ws.send(JSON.stringify({
                                                type: "audio",
                                                data: base64
                                            }));
                                        } catch (conversionErr) {
                                            console.error("Audio conversion error:", conversionErr);
                                        }
                                    }
                                }
                            })["useSession.useCallback[startListening]"];
                            mediaRecorder.onerror = ({
                                "useSession.useCallback[startListening]": (event)=>{
                                    console.error("MediaRecorder error:", event);
                                }
                            })["useSession.useCallback[startListening]"];
                            mediaRecorder.start(CHUNK_INTERVAL_MS); // Send chunks every 250ms
                        } catch (recorderErr) {
                            console.error("Failed to create MediaRecorder:", recorderErr);
                            // Cleanup on recorder creation failure
                            if (stream) {
                                stream.getTracks().forEach({
                                    "useSession.useCallback[startListening]": (track)=>track.stop()
                                }["useSession.useCallback[startListening]"]);
                            }
                            if (ws) {
                                ws.close();
                            }
                            setVoiceState("idle", "IDLE");
                        }
                    }
                })["useSession.useCallback[startListening]"];
                ws.onmessage = ({
                    "useSession.useCallback[startListening]": (event)=>{
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
                    }
                })["useSession.useCallback[startListening]"];
                ws.onerror = ({
                    "useSession.useCallback[startListening]": (error)=>{
                        console.error("WebSocket error:", error);
                    }
                })["useSession.useCallback[startListening]"];
                ws.onclose = ({
                    "useSession.useCallback[startListening]": ()=>{
                        console.log("WebSocket closed");
                        // Clean up audio resources when WebSocket closes
                        if (mediaRecorderRef.current) {
                            mediaRecorderRef.current.stop();
                            mediaRecorderRef.current = null;
                        }
                        if (audioStreamRef.current) {
                            audioStreamRef.current.getTracks().forEach({
                                "useSession.useCallback[startListening]": (track)=>track.stop()
                            }["useSession.useCallback[startListening]"]);
                            audioStreamRef.current = null;
                        }
                        setVoiceState("idle", "IDLE");
                    }
                })["useSession.useCallback[startListening]"];
            } catch (err) {
                console.error("Failed to start voice:", err);
                // Provide user-friendly error messages
                if (err instanceof DOMException) {
                    switch(err.name){
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
                    stream.getTracks().forEach({
                        "useSession.useCallback[startListening]": (track)=>track.stop()
                    }["useSession.useCallback[startListening]"]);
                }
                if (ws) {
                    ws.close();
                }
                setVoiceState("idle", "IDLE");
            }
        }
    }["useSession.useCallback[startListening]"], [
        backendSessionId,
        startSession,
        setVoiceState,
        runProductDiscovery
    ]);
    const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[stopListening]": ()=>{
            // Stop MediaRecorder first to flush any remaining data
            return new Promise({
                "useSession.useCallback[stopListening]": (resolve)=>{
                    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
                        // Wait for the final ondataavailable event before cleaning up
                        const handleDataAvailable = {
                            "useSession.useCallback[stopListening].handleDataAvailable": async ()=>{
                                mediaRecorderRef.current.removeEventListener("dataavailable", handleDataAvailable);
                                // Give a small delay for the last chunk to be sent via WebSocket
                                await new Promise({
                                    "useSession.useCallback[stopListening].handleDataAvailable": (r)=>setTimeout(r, 100)
                                }["useSession.useCallback[stopListening].handleDataAvailable"]);
                                // Stop audio tracks
                                if (audioStreamRef.current) {
                                    audioStreamRef.current.getTracks().forEach({
                                        "useSession.useCallback[stopListening].handleDataAvailable": (track)=>track.stop()
                                    }["useSession.useCallback[stopListening].handleDataAvailable"]);
                                    audioStreamRef.current = null;
                                }
                                setAudioStream(null);
                                // Close WebSocket connection gracefully
                                if (voiceWsRef.current) {
                                    // Send stop message to server before closing
                                    if (voiceWsRef.current.readyState === WebSocket.OPEN) {
                                        voiceWsRef.current.send(JSON.stringify({
                                            type: "stop"
                                        }));
                                    }
                                    voiceWsRef.current.close();
                                    voiceWsRef.current = null;
                                }
                                mediaRecorderRef.current = null;
                                setVoiceState("idle", "IDLE");
                                resolve();
                            }
                        }["useSession.useCallback[stopListening].handleDataAvailable"];
                        mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
                        mediaRecorderRef.current.stop();
                    } else {
                        // No active recorder, just clean up
                        if (audioStreamRef.current) {
                            audioStreamRef.current.getTracks().forEach({
                                "useSession.useCallback[stopListening]": (track)=>track.stop()
                            }["useSession.useCallback[stopListening]"]);
                            audioStreamRef.current = null;
                        }
                        setAudioStream(null);
                        if (voiceWsRef.current) {
                            if (voiceWsRef.current.readyState === WebSocket.OPEN) {
                                voiceWsRef.current.send(JSON.stringify({
                                    type: "stop"
                                }));
                            }
                            voiceWsRef.current.close();
                            voiceWsRef.current = null;
                        }
                        mediaRecorderRef.current = null;
                        setVoiceState("idle", "IDLE");
                        resolve();
                    }
                }
            }["useSession.useCallback[stopListening]"]);
        }
    }["useSession.useCallback[stopListening]"], [
        setVoiceState
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSession.useEffect": ()=>{
            return ({
                "useSession.useEffect": ()=>cleanupSSE()
            })["useSession.useEffect"];
        }
    }["useSession.useEffect"], [
        cleanupSSE
    ]);
    return {
        session,
        update,
        setVoiceState,
        addTranscript,
        addActivity: (label, status = "pending")=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])();
            setSession((prev)=>({
                    ...prev,
                    activities: [
                        ...prev.activities,
                        {
                            id,
                            label,
                            status,
                            timestamp: new Date()
                        }
                    ]
                }));
            return id;
        },
        updateActivity: (id, status)=>{
            setSession((prev)=>({
                    ...prev,
                    activities: prev.activities.map((a)=>a.id === id ? {
                            ...a,
                            status
                        } : a)
                }));
        },
        addTool: (name, displayName, description)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        updateTool: ()=>{},
        setConstraints: ()=>{},
        resetSession,
        startSession,
        startListening,
        stopListening,
        runProductDiscovery,
        runReservation,
        updateReservation,
        runSafetyEscalation: async ()=>{
            let currentSessionId = backendSessionId;
            if (!currentSessionId) {
                currentSessionId = await startSession();
            }
            if (!currentSessionId) return;
            setVoiceState("thinking", "UNDERSTANDING");
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].sendMessage({
                    session_id: currentSessionId,
                    message: "What medicine should I take for chest pain?"
                });
            } catch (e) {
                console.error("Failed to send message:", e);
            }
        },
        runLowStockAlternatives,
        // Expose audio stream for visualization components
        audioStream
    };
}
_s(useSession, "/mDDfQv9u9PkK7SIAqgVHH43KVc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "convertBackendInventory",
    ()=>convertBackendInventory,
    "convertBackendProduct",
    ()=>convertBackendProduct,
    "convertBackendReservation",
    ()=>convertBackendReservation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// ── KAIRO API Client ──────────────────────────────────────────
// Centralized API client for communicating with the FastAPI backend
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api") ?? "http://localhost:8000/api";
const WS_BASE_URL = ("TURBOPACK compile-time value", "ws://localhost:8000/api") ?? "ws://localhost:8000/api";
async function handleResponse(response) {
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`API Error: ${response.status} ${text}`);
    }
    const json = await response.json();
    if (json.success === false) {
        throw new Error(`API Error: ${json.error?.message || "Unknown error"}`);
    }
    return json.data !== undefined ? json.data : json;
}
// ── API Client Class ──────────────────────────────────────────
class APIClient {
    baseURL;
    constructor(baseURL = API_BASE_URL){
        this.baseURL = baseURL;
    }
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const response = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers
            }
        });
        return handleResponse(response);
    }
    // ── Sessions ────────────────────────────────────────────────
    async createSession(request) {
        return this.request("/sessions", {
            method: "POST",
            body: JSON.stringify(request)
        });
    }
    async getSession(sessionId) {
        return this.request(`/sessions/${sessionId}`);
    }
    async endSession(sessionId) {
        return this.request(`/sessions/${sessionId}`, {
            method: "DELETE"
        });
    }
    // ── Agent ────────────────────────────────────────────────────
    async sendMessage(request) {
        return this.request("/agent/message", {
            method: "POST",
            body: JSON.stringify(request)
        });
    }
    // ── Events (SSE) ─────────────────────────────────────────────
    getEventStreamURL(sessionId) {
        return `${this.baseURL}/sessions/${sessionId}/events/stream`;
    }
    async getSessionEvents(sessionId, limit = 100) {
        return this.request(`/sessions/${sessionId}/events?limit=${limit}`);
    }
    // ── Voice ────────────────────────────────────────────────────
    async startVoiceSession(request) {
        return this.request("/voice/start", {
            method: "POST",
            body: JSON.stringify(request)
        });
    }
    async stopVoiceSession(request) {
        return this.request("/voice/stop", {
            method: "POST",
            body: JSON.stringify(request)
        });
    }
    getVoiceWebSocketURL(sessionId) {
        return `${WS_BASE_URL}/ws/voice/${sessionId}`;
    }
    // ── Products ─────────────────────────────────────────────────
    async searchProducts(params) {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value])=>{
            if (value !== undefined && value !== null) {
                searchParams.append(key, String(value));
            }
        });
        return this.request(`/products/search?${searchParams.toString()}`);
    }
    async getProduct(productId, storeId) {
        const searchParams = storeId ? `?store_id=${storeId}` : "";
        return this.request(`/products/${productId}${searchParams}`);
    }
    // ── Inventory ────────────────────────────────────────────────
    async checkInventory(productId, storeId, quantity = 1) {
        return this.request(`/inventory/${productId}?store_id=${storeId}&quantity=${quantity}`);
    }
    async getStoreInventory(storeId, includeOutOfStock = false) {
        return this.request(`/stores/${storeId}/inventory?include_out_of_stock=${includeOutOfStock}`);
    }
    // ── Reservations ─────────────────────────────────────────────
    async prepareReservation(request) {
        return this.request("/reservations/prepare", {
            method: "POST",
            body: JSON.stringify(request)
        });
    }
    async confirmReservation(request) {
        return this.request(`/reservations/${request.reservation_id}/confirm`, {
            method: "POST",
            body: JSON.stringify({
                idempotency_key: request.idempotency_key
            })
        });
    }
    async updateReservation(request) {
        return this.request(`/reservations/${request.reservation_id}`, {
            method: "PATCH",
            body: JSON.stringify({
                product_id: request.product_id,
                new_quantity: request.new_quantity
            })
        });
    }
    async cancelReservation(reservationId) {
        return this.request(`/reservations/${reservationId}`, {
            method: "DELETE"
        });
    }
    async getReservation(reservationId) {
        return this.request(`/reservations/${reservationId}`);
    }
    // ── Health ───────────────────────────────────────────────────
    async healthCheck() {
        return this.request("/health");
    }
}
const api = new APIClient();
function convertBackendProduct(backendProduct) {
    return {
        id: backendProduct.id,
        name: backendProduct.name,
        nameHindi: backendProduct.name_hindi ?? undefined,
        description: backendProduct.description,
        price: backendProduct.price,
        currency: backendProduct.currency,
        category: backendProduct.category,
        subcategory: backendProduct.subcategory,
        attributes: backendProduct.attributes.flatMap((attr)=>Object.values(attr)),
        imageEmoji: backendProduct.image_emoji ?? "📦",
        aisle: backendProduct.aisle,
        section: backendProduct.section,
        isRecommended: false,
        matchReasons: []
    };
}
function convertBackendInventory(backendInventory) {
    return {
        productId: backendInventory.product_id,
        storeId: backendInventory.store_id,
        quantity: backendInventory.quantity,
        lastUpdated: new Date(backendInventory.last_updated),
        status: backendInventory.status
    };
}
function convertBackendReservation(backendReservation) {
    const firstItem = backendReservation.items[0];
    return {
        id: backendReservation.id,
        productId: firstItem?.product_id ?? "",
        productName: firstItem?.product_name ?? "",
        quantity: firstItem?.quantity ?? 1,
        unitPrice: firstItem?.unit_price ?? 0,
        totalPrice: backendReservation.total_amount,
        storeId: backendReservation.store_id,
        storeName: backendReservation.store_name,
        createdAt: new Date(backendReservation.created_at),
        expiresAt: new Date(backendReservation.expires_at),
        status: backendReservation.status,
        confirmationCode: backendReservation.reservation_code
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDuration",
    ()=>formatDuration,
    "formatPrice",
    ()=>formatPrice,
    "formatTime",
    ()=>formatTime,
    "generateId",
    ()=>generateId,
    "sleep",
    ()=>sleep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatPrice(amount, currency = "INR") {
    if (currency === "INR") return `₹${amount}`;
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency
    }).format(amount);
}
function formatDuration(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function formatTime(date) {
    return date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });
}
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function generateId() {
    return Math.random().toString(36).slice(2, 10);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_14xxspb._.js.map