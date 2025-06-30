(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/styles/modules/gouwuche/gouwu.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "hao": "gouwu-module__VwjdHq__hao",
  "jiajian": "gouwu-module__VwjdHq__jiajian",
  "zhiti": "gouwu-module__VwjdHq__zhiti",
  "zhiti1": "gouwu-module__VwjdHq__zhiti1",
  "zhu": "gouwu-module__VwjdHq__zhu",
  "zhu1": "gouwu-module__VwjdHq__zhu1",
});
}}),
"[project]/src/store/gouwuceh.ts [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/store/gouwuceh.ts'

Parenthesized expression cannot be empty`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/src/store/denglu.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAuthStore": (()=>useAuthStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const useAuthStore = (set, get)=>({
        user: null,
        isLoggedIn: false,
        log: ()=>{
            set({
                isLoggedIn: true
            });
            get().settongbu();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/api/gouwuche?cz=1`).then((res)=>console.log(res.data));
        },
        logout: ()=>set({
                isLoggedIn: false,
                user: null
            }),
        setuser: (id)=>set({
                user: id
            })
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useStore": (()=>useStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$gouwuceh$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/gouwuceh.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$denglu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/denglu.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const wangluo = (config)=>(set, get, api)=>{
        const newset = (ll)=>{
            const handleoffline = ()=>{
                return set({
                    wangluo: false
                });
            };
            const handleonline = ()=>{
                return set({
                    wangluo: true
                });
            };
            window.addEventListener("offline", handleoffline);
            window.addEventListener("online", handleonline);
            return set(ll);
        };
        return config(newset, get, api);
    };
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(wangluo(_s((set, get)=>{
    _s();
    return {
        // 购物车
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$gouwuceh$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])(set, get),
        // 登录
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$denglu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(set, get)
    };
}, "QKbMCzGMsFCf14Q7y4iK+2CthCY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$gouwuceh$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$denglu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
})));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/gouwuche/gouwuche.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Gouwuche)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$gouwuche$2f$gouwu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/modules/gouwuche/gouwu.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Gouwuche() {
    _s();
    let shangping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "Gouwuche.useStore[shangping]": (state)=>state.shangping
    }["Gouwuche.useStore[shangping]"]);
    const shangpingjia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "Gouwuche.useStore[shangpingjia]": (state)=>state.shangpingjia
    }["Gouwuche.useStore[shangpingjia]"]);
    const shangpingjian = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "Gouwuche.useStore[shangpingjian]": (state)=>state.shangpingjian
    }["Gouwuche.useStore[shangpingjian]"]);
    const handleclick = (id)=>{
        shangpingjia(id);
    };
    const handleclick2 = (id)=>{
        shangpingjian(id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: shangping.map((shang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$gouwuche$2f$gouwu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zhu1,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$gouwuche$2f$gouwu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zhu,
                            children: [
                                "欢迎",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/gouwuche/gouwuche.tsx",
                                    lineNumber: 21,
                                    columnNumber: 39
                                }, this),
                                "光临"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/gouwuche/gouwuche.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$gouwuche$2f$gouwu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hao,
                            children: [
                                " 这是",
                                shang.id,
                                "号商品"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/gouwuche/gouwuche.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$gouwuche$2f$gouwu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].jiajian,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$gouwuche$2f$gouwu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zhiti,
                                    onClick: ()=>handleclick(shang.id),
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gouwuche/gouwuche.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$gouwuche$2f$gouwu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zhiti,
                                    children: shang.shu
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gouwuche/gouwuche.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$gouwuche$2f$gouwu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zhiti1,
                                    onClick: ()=>handleclick2(shang.id),
                                    children: "-"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gouwuche/gouwuche.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/gouwuche/gouwuche.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/gouwuche/gouwuche.tsx",
                    lineNumber: 20,
                    columnNumber: 10
                }, this)
            }, shang.id, false, {
                fileName: "[project]/src/components/gouwuche/gouwuche.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
_s(Gouwuche, "k2K7kw+ncytfAmNqgQbXzR0AqQ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Gouwuche;
var _c;
__turbopack_context__.k.register(_c, "Gouwuche");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_944e5584._.js.map