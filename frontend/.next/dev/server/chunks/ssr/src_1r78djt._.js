module.exports = [
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$KairoShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/KairoShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$safety$2f$SafetyEscalation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/safety/SafetyEscalation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientOnly$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ClientOnly.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function HomePage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { session, resetSession, runProductDiscovery, runReservation, updateReservation, runSafetyEscalation, runLowStockAlternatives, addTranscript, startSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [showReservationFor, setShowReservationFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSimulating, setIsSimulating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Quick tap suggestion state
    const lastKairo = session.transcript.filter((t)=>t.speaker === "kairo").slice(-1)[0];
    const showCarbOptions = lastKairo?.text.includes("carbonated or non-carbonated") && session.status === "idle";
    const handleStartConversation = async ()=>{
        try {
            await startSession();
            router.push("/conversation");
        } catch (error) {
            console.error("Failed to start session:", error);
        }
    };
    const handleTextSubmit = (e)=>{
        e.preventDefault();
        if (!inputText.trim()) return;
        const text = inputText.trim();
        setInputText("");
        setIsSimulating(true);
        runProductDiscovery(text).finally(()=>setIsSimulating(false));
    };
    const handleReserve = (product)=>{
        setShowReservationFor(product);
    };
    const handleConfirmReservation = (qty)=>{
        if (!showReservationFor) return;
        setShowReservationFor(null);
        runReservation(showReservationFor, qty);
    };
    const handleUpdateReservation = (qty)=>{
        if (!session.reservation) return;
        updateReservation(session.reservation, qty);
    };
    const handleSafetyDemo = ()=>{
        setIsSimulating(true);
        addTranscript("user", "What medicine should I take for chest pain?");
        runSafetyEscalation();
        setIsSimulating(false);
    };
    const handleLowStock = ()=>{
        setIsSimulating(true);
        runLowStockAlternatives().finally(()=>setIsSimulating(false));
    };
    const handleCarbOption = (val)=>{
        if (isSimulating) return;
        setIsSimulating(true);
        addTranscript("user", val);
        const lastUserText = session.transcript.filter((t)=>t.speaker === "user").slice(-2)[0]?.text ?? "";
        runProductDiscovery(`${lastUserText} ${val}`).finally(()=>setIsSimulating(false));
    };
    const isActive = session.status !== "idle";
    const hasProducts = session.products.length > 0;
    const hasReservation = !!session.reservation;
    const hasSafety = !!session.safetyState?.triggered;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientOnly$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientOnly"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$KairoShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KairoShell"], {
            showNav: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    minHeight: 0,
                    overflow: "hidden",
                    padding: "2rem"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1.5rem",
                        width: "100%",
                        maxWidth: 480
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo.png",
                                    alt: "KAIRO Logo",
                                    style: {
                                        width: 140,
                                        height: 140,
                                        borderRadius: "20px",
                                        objectFit: "cover",
                                        marginBottom: "1rem"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: "var(--color-kairo-subtle)",
                                        fontSize: "1.125rem",
                                        lineHeight: 1.6
                                    },
                                    children: "Your real-time AI voice assistant for retail. Tap below to start a conversation."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary",
                            onClick: handleStartConversation,
                            style: {
                                padding: "1rem 2.5rem",
                                borderRadius: "12px",
                                fontSize: "1.125rem",
                                minWidth: 280
                            },
                            children: "Start Conversation"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.75rem",
                                width: "100%",
                                maxWidth: 320
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-secondary",
                                    onClick: ()=>{
                                        startSession().then(()=>router.push("/conversation"));
                                    },
                                    style: {
                                        textAlign: "left",
                                        padding: "1rem 1.25rem",
                                        fontSize: "0.9375rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 600,
                                                color: "var(--color-kairo-ink)"
                                            },
                                            children: "Find a Product"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "0.8125rem",
                                                color: "var(--color-kairo-muted)"
                                            },
                                            children: "Search by name, category, or preferences"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-secondary",
                                    onClick: ()=>{
                                        startSession().then(()=>router.push("/conversation"));
                                    },
                                    style: {
                                        textAlign: "left",
                                        padding: "1rem 1.25rem",
                                        fontSize: "0.9375rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 600,
                                                color: "var(--color-kairo-ink)"
                                            },
                                            children: "Reserve an Item"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "0.8125rem",
                                                color: "var(--color-kairo-muted)"
                                            },
                                            children: "Quick 30-minute hold on any product"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-secondary",
                                    onClick: ()=>{
                                        startSession().then(()=>router.push("/conversation"));
                                    },
                                    style: {
                                        textAlign: "left",
                                        padding: "1rem 1.25rem",
                                        fontSize: "0.9375rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 600,
                                                color: "var(--color-kairo-ink)"
                                            },
                                            children: "Check Alternatives"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "0.8125rem",
                                                color: "var(--color-kairo-muted)"
                                            },
                                            children: "Find substitutes when items are out of stock"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        hasSafety && session.safetyState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "100%",
                                maxWidth: 480
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$safety$2f$SafetyEscalation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafetyEscalation"], {
                                    safety: session.safetyState,
                                    onConnectStaff: ()=>alert("Connecting to staff..."),
                                    onContinue: ()=>{},
                                    onDismiss: resetSession
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "0.75rem"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$safety$2f$SafetyEscalation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HumanHandoff"], {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 181,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "auto",
                                paddingTop: "1.5rem",
                                borderTop: "1px solid var(--color-kairo-border)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "0.5rem 1rem",
                                        fontSize: "0.6rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: "var(--color-kairo-muted)"
                                    },
                                    children: "Try a Scenario"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.5rem"
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_SCENARIOS"].map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: async ()=>{
                                                setIsSimulating(true);
                                                resetSession();
                                                try {
                                                    if (scenario.id === "product_discovery") {
                                                        await runProductDiscovery("I need a cold drink under ₹70, preferably not too sweet.");
                                                    } else if (scenario.id === "low_stock") {
                                                        await runLowStockAlternatives();
                                                    } else if (scenario.id === "reservation") {
                                                        await runProductDiscovery("Reserve one Strawberry Milk please.");
                                                    } else if (scenario.id === "safety_escalation") {
                                                        addTranscript("user", "What medicine should I take for chest pain?");
                                                        await runSafetyEscalation();
                                                    }
                                                } finally{
                                                    setIsSimulating(false);
                                                    router.push("/conversation");
                                                }
                                            },
                                            style: {
                                                padding: "0.75rem 1rem",
                                                background: "var(--color-kairo-surface)",
                                                border: "1px solid var(--color-kairo-border)",
                                                borderRadius: "8px",
                                                textAlign: "left",
                                                cursor: "pointer",
                                                transition: "all 0.15s ease"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 600,
                                                        color: "var(--color-kairo-ink)"
                                                    },
                                                    children: scenario.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: "0.75rem",
                                                        color: "var(--color-kairo-muted)"
                                                    },
                                                    children: scenario.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, scenario.id, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "2.5rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.625rem 1rem",
                                background: "var(--color-kairo-surface)",
                                border: "1px solid var(--color-kairo-border)",
                                borderRadius: "8px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 7,
                                        height: 7,
                                        borderRadius: "50%",
                                        background: "var(--color-success)",
                                        boxShadow: "0 0 6px var(--color-success)",
                                        display: "block"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "0.8125rem",
                                        color: "var(--color-kairo-subtle)"
                                    },
                                    children: "Store #042 · Hatiara Central · Open now"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
function PanelHeader({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "0.75rem 1rem 0.5rem",
            borderBottom: "1px solid var(--color-kairo-border)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-kairo-muted)"
            },
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 299,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 293,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ClientOnly.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientOnly",
    ()=>ClientOnly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ClientOnly({ children }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMounted(true), []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ClientOnly.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/safety/SafetyEscalation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HumanHandoff",
    ()=>HumanHandoff,
    "SafetyEscalation",
    ()=>SafetyEscalation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function SafetyEscalation({ safety, onConnectStaff, onContinue, onDismiss }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            safety.escalationAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "0.75rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            onDismiss && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
function HumanHandoff({ onConnect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/components/shell/KairoShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KairoShell",
    ()=>KairoShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function KairoShell({ children, showNav = false, rightSlot }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            background: "var(--color-kairo-cream)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem 1.5rem",
                    borderBottom: "1px solid var(--color-kairo-border)",
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(8px)",
                    position: "sticky",
                    top: 0,
                    zIndex: 100
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            textDecoration: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/KairoShell.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 700,
                                    fontSize: "1.125rem",
                                    letterSpacing: "-0.03em",
                                    color: "var(--color-kairo-ink)"
                                },
                                children: "KAIRO"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/KairoShell.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shell/KairoShell.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem"
                        },
                        children: [
                            showNav && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                style: {
                                    display: "flex",
                                    gap: "0.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/conversation",
                                        className: "btn-ghost",
                                        children: "Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shell/KairoShell.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/demo",
                                        className: "btn-ghost",
                                        children: "Demo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shell/KairoShell.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shell/KairoShell.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            rightSlot
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shell/KairoShell.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/KairoShell.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/KairoShell.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRightIcon",
    ()=>ArrowRightIcon,
    "KairoMark",
    ()=>KairoMark,
    "Logo",
    ()=>Logo,
    "PulseRing",
    ()=>PulseRing,
    "ShieldIcon",
    ()=>ShieldIcon,
    "StatusDot",
    ()=>StatusDot,
    "ZapIcon",
    ()=>ZapIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
;
;
const Logo = ({ size = 32 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "32",
                height: "32",
                rx: "8",
                fill: "var(--color-signal)"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 6,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 22L16 10L22 22",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 7,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 18H20",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const KairoMark = ({ size = 40, color = 'white' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 28L20 12L28 28",
                stroke: color,
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 23H25",
                stroke: color,
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const StatusDot = ({ status = 'online', size = 6 })=>{
    const color = status === 'online' ? 'var(--color-success)' : status === 'warning' ? 'var(--color-warning)' : 'var(--color-kairo-muted)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: color,
            boxShadow: status === 'online' ? `0 0 6px ${color}` : 'none'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const PulseRing = ({ size = 8 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pulse-ring",
        style: {
            width: size,
            height: size
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ArrowRightIcon = ({ size = 20, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
        size: size,
        style: style
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 38,
        columnNumber: 105
    }, ("TURBOPACK compile-time value", void 0));
const ShieldIcon = ({ size = 14, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
        size: size,
        style: style
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 39,
        columnNumber: 101
    }, ("TURBOPACK compile-time value", void 0));
const ZapIcon = ({ size = 14, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
        size: size,
        style: style
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 40,
        columnNumber: 98
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/data/mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/hooks/useSession.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSession",
    ()=>useSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(createInitialState);
    const eventSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [backendSessionId, setBackendSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const voiceWsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [audioStream, setAudioStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((partial)=>setSession((prev)=>({
                ...prev,
                ...partial
            })), []);
    const setVoiceState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((status, agentState)=>setSession((prev)=>({
                ...prev,
                status,
                agentState: agentState ?? prev.agentState
            })), []);
    const addTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((speaker, text)=>{
        const entry = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
            speaker,
            text,
            timestamp: new Date()
        };
        setSession((prev)=>({
                ...prev,
                transcript: [
                    ...prev.transcript,
                    entry
                ]
            }));
        return entry;
    }, []);
    const cleanupSSE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (eventSourceRef.current) {
            eventSourceRef.current.close();
            eventSourceRef.current = null;
        }
    }, []);
    const resetSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        cleanupSSE();
        setBackendSessionId(null);
        setSession(createInitialState());
    }, [
        cleanupSSE
    ]);
    const startSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setVoiceState("listening", "IDLE");
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].createSession({
                store_id: "store-042",
                language: "en"
            });
            const sessionId = res.id;
            setBackendSessionId(sessionId);
            // Connect SSE
            cleanupSSE();
            const sse = new EventSource(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getEventStreamURL(sessionId));
            eventSourceRef.current = sse;
            sse.onmessage = (event)=>{
                try {
                    const data = JSON.parse(event.data);
                    handleBackendEvent(data);
                } catch (e) {
                    console.error("Failed to parse SSE event:", e);
                }
            };
            sse.onerror = (error)=>{
                console.error("SSE Error:", error);
            };
            return sessionId;
        } catch (error) {
            console.error("Failed to start session:", error);
            setSession((prev)=>({
                    ...prev,
                    error: "Failed to connect to backend"
                }));
            throw error;
        }
    }, [
        cleanupSSE,
        setVoiceState
    ]);
    const handleBackendEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eventData)=>{
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
                setTimeout(()=>setVoiceState("idle", "IDLE"), 3000);
                break;
            case "TOOL_STARTED":
                setVoiceState("tool_running", "TOOL_EXECUTION");
                setSession((prev)=>({
                        ...prev,
                        activities: [
                            ...prev.activities,
                            {
                                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
                                label: `Running ${payload.tool}...`,
                                status: "active",
                                timestamp: new Date()
                            }
                        ]
                    }));
                break;
            case "TOOL_COMPLETED":
                setVoiceState("thinking", "PLANNING");
                if (payload?.tool === "search_products" && payload.output?.products) {
                    const frontendProducts = payload.output.products.map((p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertBackendProduct"])(p));
                    setSession((prev)=>({
                            ...prev,
                            products: frontendProducts,
                            activities: prev.activities.map((a, i)=>i === prev.activities.length - 1 ? {
                                    ...a,
                                    status: "complete"
                                } : a)
                        }));
                }
                break;
            case "ESCALATION_REQUIRED":
                setVoiceState("speaking", "ESCALATION");
                setSession((prev)=>({
                        ...prev,
                        safetyState: {
                            triggered: true,
                            reason: payload.reason,
                            category: payload.category,
                            escalationAvailable: true
                        }
                    }));
                addTranscript("kairo", "I can help with product information, but I can't diagnose or recommend treatment. A qualified healthcare professional should help with this.");
                break;
            default:
                console.log("Unhandled backend event:", type, payload);
        }
    }, [
        setVoiceState,
        addTranscript
    ]);
    const runProductDiscovery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userInput)=>{
        let currentSessionId = backendSessionId;
        if (!currentSessionId) {
            currentSessionId = await startSession();
        }
        if (!currentSessionId) return; // Still failed to start
        addTranscript("user", userInput);
        setVoiceState("thinking", "UNDERSTANDING");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].sendMessage({
                session_id: currentSessionId,
                message: userInput
            });
        } catch (e) {
            console.error("Failed to send message:", e);
        }
    }, [
        backendSessionId,
        startSession,
        addTranscript,
        setVoiceState
    ]);
    const runReservation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (product, quantity)=>{
        if (!backendSessionId) return;
        setVoiceState("action", "TOOL_EXECUTION");
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].prepareReservation({
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
            const confirmation = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].confirmReservation({
                reservation_id: res.reservation_id
            });
            const frontendReservation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertBackendReservation"])(confirmation);
            setSession((prev)=>({
                    ...prev,
                    reservation: frontendReservation,
                    status: "success",
                    agentState: "ACTION_COMPLETE"
                }));
            addTranscript("kairo", `Done. Reserved ${quantity} ${product.name}. Your code is ${frontendReservation.confirmationCode}.`);
        } catch (e) {
            console.error("Reservation failed:", e);
        }
    }, [
        backendSessionId,
        setVoiceState,
        addTranscript
    ]);
    const updateReservation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (reservation, newQuantity)=>{
        if (!backendSessionId) return;
        setVoiceState("action", "TOOL_EXECUTION");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].updateReservation({
                reservation_id: reservation.id,
                product_id: reservation.productId,
                new_quantity: newQuantity
            });
            setSession((prev)=>({
                    ...prev,
                    reservation: {
                        ...reservation,
                        quantity: newQuantity
                    },
                    status: "success",
                    agentState: "ACTION_COMPLETE"
                }));
            addTranscript("kairo", `Updated to ${newQuantity} ${reservation.productName}.`);
        } catch (e) {
            console.error("Update reservation failed", e);
        }
    }, [
        backendSessionId,
        setVoiceState,
        addTranscript
    ]);
    const runLowStockAlternatives = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        runProductDiscovery("Do you have Mango Lassi?");
    }, [
        runProductDiscovery
    ]);
    const startListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
            const wsUrl = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getVoiceWebSocketURL(currentSessionId).replace("http", "ws");
            ws = new WebSocket(wsUrl);
            voiceWsRef.current = ws;
            // Set up WebSocket event handlers BEFORE opening
            ws.onopen = ()=>{
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
                    mediaRecorder.ondataavailable = async (event)=>{
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
                    };
                    mediaRecorder.onerror = (event)=>{
                        console.error("MediaRecorder error:", event);
                    };
                    mediaRecorder.start(CHUNK_INTERVAL_MS); // Send chunks every 250ms
                } catch (recorderErr) {
                    console.error("Failed to create MediaRecorder:", recorderErr);
                    // Cleanup on recorder creation failure
                    if (stream) {
                        stream.getTracks().forEach((track)=>track.stop());
                    }
                    if (ws) {
                        ws.close();
                    }
                    setVoiceState("idle", "IDLE");
                }
            };
            ws.onmessage = (event)=>{
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
            ws.onerror = (error)=>{
                console.error("WebSocket error:", error);
            };
            ws.onclose = ()=>{
                console.log("WebSocket closed");
                // Clean up audio resources when WebSocket closes
                if (mediaRecorderRef.current) {
                    mediaRecorderRef.current.stop();
                    mediaRecorderRef.current = null;
                }
                if (audioStreamRef.current) {
                    audioStreamRef.current.getTracks().forEach((track)=>track.stop());
                    audioStreamRef.current = null;
                }
                setVoiceState("idle", "IDLE");
            };
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
                stream.getTracks().forEach((track)=>track.stop());
            }
            if (ws) {
                ws.close();
            }
            setVoiceState("idle", "IDLE");
        }
    }, [
        backendSessionId,
        startSession,
        setVoiceState,
        runProductDiscovery
    ]);
    const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Stop MediaRecorder first to flush any remaining data
        return new Promise((resolve)=>{
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
                // Wait for the final ondataavailable event before cleaning up
                const handleDataAvailable = async ()=>{
                    mediaRecorderRef.current.removeEventListener("dataavailable", handleDataAvailable);
                    // Give a small delay for the last chunk to be sent via WebSocket
                    await new Promise((r)=>setTimeout(r, 100));
                    // Stop audio tracks
                    if (audioStreamRef.current) {
                        audioStreamRef.current.getTracks().forEach((track)=>track.stop());
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
                };
                mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
                mediaRecorderRef.current.stop();
            } else {
                // No active recorder, just clean up
                if (audioStreamRef.current) {
                    audioStreamRef.current.getTracks().forEach((track)=>track.stop());
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
        });
    }, [
        setVoiceState
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>cleanupSSE();
    }, [
        cleanupSSE
    ]);
    return {
        session,
        update,
        setVoiceState,
        addTranscript,
        addActivity: (label, status = "pending")=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])();
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
        addTool: (name, displayName, description)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].sendMessage({
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
}),
"[project]/src/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
}),
];

//# sourceMappingURL=src_1r78djt._.js.map