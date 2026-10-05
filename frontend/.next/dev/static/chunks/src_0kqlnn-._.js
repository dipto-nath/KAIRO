(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$KairoShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/KairoShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientOnly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ClientOnly.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function HomePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { session, resetSession, startSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const handleStartConversation = async ()=>{
        try {
            await startSession();
            router.push("/conversation");
        } catch (error) {
            console.error("Failed to start session:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientOnly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientOnly"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$KairoShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KairoShell"], {
            showNav: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    style: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "var(--space-4xl) var(--space-xl)",
                        maxWidth: "720px",
                        margin: "0 auto",
                        width: "100%"
                    },
                    children: session.status === "idle" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            maxWidth: "560px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-up",
                                style: {
                                    width: 80,
                                    height: 80,
                                    margin: "0 auto var(--space-xl)",
                                    borderRadius: "var(--radius-lg)",
                                    background: "linear-gradient(135deg, var(--color-signal) 0%, var(--color-pulse) 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "var(--shadow-lg)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KairoMark"], {
                                    size: 40,
                                    color: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-display animate-fade-up",
                                style: {
                                    animationDelay: "0.1s",
                                    marginBottom: "var(--space-md)",
                                    color: "var(--color-kairo-ink)"
                                },
                                children: "Real-Time AI for Retail"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-body-lg animate-fade-up",
                                style: {
                                    animationDelay: "0.2s",
                                    marginBottom: "var(--space-2xl)",
                                    maxWidth: "480px",
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                },
                                children: "Talk to your store. Get instant product discovery, reservations, and safety‑guided recommendations—powered by agentic AI that runs on the edge."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleStartConversation,
                                className: "btn-primary animate-fade-up",
                                style: {
                                    animationDelay: "0.3s",
                                    padding: "1rem 2rem",
                                    fontSize: "1.0625rem"
                                },
                                children: [
                                    "Start Conversation",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {
                                        size: 20,
                                        style: {
                                            marginLeft: "0.5rem"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-up",
                                style: {
                                    animationDelay: "0.4s",
                                    marginTop: "var(--space-2xl)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "var(--space-xl)",
                                    color: "var(--color-kairo-muted)",
                                    fontSize: "0.875rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.375rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusDot"], {
                                                status: "online",
                                                size: 6
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Live at Store #042"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "1px",
                                            height: "1.25rem",
                                            background: "var(--color-kairo-border)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.375rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShieldIcon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Safety‑first"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "1px",
                                            height: "1.25rem",
                                            background: "var(--color-kairo-border)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.375rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZapIcon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Sub‑second latency"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            maxWidth: "560px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-up",
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.5rem 1rem",
                                    background: "var(--color-pulse-ghost)",
                                    border: "1px solid var(--color-pulse-light)",
                                    borderRadius: "var(--radius-full)",
                                    marginBottom: "var(--space-lg)",
                                    color: "var(--color-pulse)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PulseRing"], {
                                        size: 8
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 500
                                        },
                                        children: "Session active"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.75rem",
                                            padding: "0.125rem 0.5rem",
                                            background: "var(--color-pulse)",
                                            color: "white",
                                            borderRadius: "var(--radius-full)"
                                        },
                                        children: [
                                            session.products.length,
                                            " products"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-heading animate-fade-up",
                                style: {
                                    animationDelay: "0.1s"
                                },
                                children: "Continue where you left off"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-body animate-fade-up",
                                style: {
                                    animationDelay: "0.15s",
                                    marginBottom: "var(--space-xl)",
                                    color: "var(--color-kairo-muted)"
                                },
                                children: "Your conversation is waiting. Pick up right where you left off."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/conversation",
                                className: "btn-primary animate-fade-up",
                                style: {
                                    animationDelay: "0.2s"
                                },
                                children: [
                                    "Open Conversation",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {
                                        size: 20,
                                        style: {
                                            marginLeft: "0.5rem"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "var(--space-lg)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: resetSession,
                                    className: "btn-ghost",
                                    children: "Start Fresh"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    style: {
                        padding: "var(--space-xl) var(--space-xl)",
                        borderTop: "1px solid var(--color-kairo-border)",
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.8125rem",
                            color: "var(--color-kairo-subtle)",
                            maxWidth: "480px",
                            margin: "0 auto"
                        },
                        children: [
                            "KAIRO · Real-Time Agentic AI for Retail ·",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/privacy",
                                style: {
                                    color: "var(--color-kairo-muted)",
                                    textDecoration: "underline"
                                },
                                children: "Privacy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this),
                            " ",
                            "·",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/terms",
                                style: {
                                    color: "var(--color-kairo-muted)",
                                    textDecoration: "underline"
                                },
                                children: "Terms"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(HomePage, "BK/QQWUbGwkRarFNGRsPzogZBOw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
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
"[project]/src/components/shell/KairoShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KairoShell",
    ()=>KairoShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-client] (ecmascript)");
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
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(8px)",
                    position: "sticky",
                    top: 0,
                    zIndex: 100
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            textDecoration: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/KairoShell.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    gap: "0.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/conversation",
                                        className: "btn-ghost",
                                        children: "Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shell/KairoShell.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = KairoShell;
var _c;
__turbopack_context__.k.register(_c, "KairoShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
;
;
const Logo = ({ size = 32 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "32",
                height: "32",
                rx: "8",
                fill: "var(--color-signal)"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 6,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = Logo;
const KairoMark = ({ size = 40, color = 'white' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c1 = KairoMark;
const StatusDot = ({ status = 'online', size = 6 })=>{
    const color = status === 'online' ? 'var(--color-success)' : status === 'warning' ? 'var(--color-warning)' : 'var(--color-kairo-muted)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c2 = StatusDot;
const PulseRing = ({ size = 8 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c3 = PulseRing;
const ArrowRightIcon = ({ size = 20, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
        size: size,
        style: style
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 38,
        columnNumber: 105
    }, ("TURBOPACK compile-time value", void 0));
_c4 = ArrowRightIcon;
const ShieldIcon = ({ size = 14, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
        size: size,
        style: style
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 39,
        columnNumber: 101
    }, ("TURBOPACK compile-time value", void 0));
_c5 = ShieldIcon;
const ZapIcon = ({ size = 14, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
        size: size,
        style: style
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 40,
        columnNumber: 98
    }, ("TURBOPACK compile-time value", void 0));
_c6 = ZapIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Logo");
__turbopack_context__.k.register(_c1, "KairoMark");
__turbopack_context__.k.register(_c2, "StatusDot");
__turbopack_context__.k.register(_c3, "PulseRing");
__turbopack_context__.k.register(_c4, "ArrowRightIcon");
__turbopack_context__.k.register(_c5, "ShieldIcon");
__turbopack_context__.k.register(_c6, "ZapIcon");
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

//# sourceMappingURL=src_0kqlnn-._.js.map