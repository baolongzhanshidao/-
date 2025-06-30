(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/styles/modules/page.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "daohang": "page-module__gICtzG__daohang",
  "daohang1": "page-module__gICtzG__daohang1",
  "daohang2": "page-module__gICtzG__daohang2",
  "daohang3": "page-module__gICtzG__daohang3",
  "daohangbiaoqian": "page-module__gICtzG__daohangbiaoqian",
  "jiantou": "page-module__gICtzG__jiantou",
  "xiantext": "page-module__gICtzG__xiantext",
  "xiantext1": "page-module__gICtzG__xiantext1",
  "xiantext2": "page-module__gICtzG__xiantext2",
  "zhu": "page-module__gICtzG__zhu",
});
}}),
"[project]/src/styles/modules/top.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "geitupianyong": "top-module__5yQfma__geitupianyong",
  "shousuo": "top-module__5yQfma__shousuo",
  "shousuoanliu": "top-module__5yQfma__shousuoanliu",
  "shousuolan": "top-module__5yQfma__shousuolan",
  "top": "top-module__5yQfma__top",
});
}}),
"[project]/src/styles/modules/xiaodaohang.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "xiaodaohang": "xiaodaohang-module__9XpLlW__xiaodaohang",
  "xiaodaohang1": "xiaodaohang-module__9XpLlW__xiaodaohang1",
  "xiaodaohang2": "xiaodaohang-module__9XpLlW__xiaodaohang2",
  "xiaodaohang3": "xiaodaohang-module__9XpLlW__xiaodaohang3",
  "xiaodaohang4": "xiaodaohang-module__9XpLlW__xiaodaohang4",
  "zhu": "xiaodaohang-module__9XpLlW__zhu",
});
}}),
"[project]/src/styles/modules/fenlei1.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "div": "fenlei1-module__XBNfkq__div",
  "div1": "fenlei1-module__XBNfkq__div1",
  "div2": "fenlei1-module__XBNfkq__div2",
  "div3": "fenlei1-module__XBNfkq__div3",
  "grid": "fenlei1-module__XBNfkq__grid",
});
}}),
"[project]/src/hooks/uselnfiniteScroll.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useScrollLoader = (callback, options = {})=>{
    _s();
    const { throttleTime = 800, debounceTime = 500, threshold = 300 } = options;
    const lastCalledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const scrollPositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const saveScrollPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollLoader.useCallback[saveScrollPosition]": ()=>{
            scrollPositionRef.current = window.scrollY;
        }
    }["useScrollLoader.useCallback[saveScrollPosition]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollLoader.useEffect": ()=>{
            window.addEventListener('beforeunload', saveScrollPosition);
            isMountedRef.current = true;
            return ({
                "useScrollLoader.useEffect": ()=>{
                    isMountedRef.current = false;
                    window.removeEventListener('beforeunload', saveScrollPosition);
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }
            })["useScrollLoader.useEffect"];
        }
    }["useScrollLoader.useEffect"], [
        saveScrollPosition
    ]);
    const checkPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollLoader.useCallback[checkPosition]": ()=>{
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            return scrollHeight - (scrollTop + clientHeight) < threshold;
        }
    }["useScrollLoader.useCallback[checkPosition]"], [
        threshold
    ]);
    const triggerCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollLoader.useCallback[triggerCallback]": ()=>{
            if (isMountedRef.current && checkPosition()) {
                lastCalledRef.current = Date.now();
                callback();
            }
        }
    }["useScrollLoader.useCallback[triggerCallback]"], [
        callback,
        checkPosition
    ]);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollLoader.useCallback[handleScroll]": ()=>{
            saveScrollPosition();
            const now = Date.now();
            const timeSinceLast = now - lastCalledRef.current;
            if (timeSinceLast < throttleTime) {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout({
                    "useScrollLoader.useCallback[handleScroll]": ()=>{
                        triggerCallback();
                    }
                }["useScrollLoader.useCallback[handleScroll]"], throttleTime - timeSinceLast + debounceTime);
                return;
            }
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout({
                "useScrollLoader.useCallback[handleScroll]": ()=>{
                    triggerCallback();
                }
            }["useScrollLoader.useCallback[handleScroll]"], debounceTime);
        }
    }["useScrollLoader.useCallback[handleScroll]"], [
        saveScrollPosition,
        checkPosition,
        throttleTime,
        debounceTime,
        triggerCallback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollLoader.useEffect": ()=>{
            const optimizedScroll = {
                "useScrollLoader.useEffect.optimizedScroll": ()=>{
                    requestAnimationFrame(handleScroll);
                }
            }["useScrollLoader.useEffect.optimizedScroll"];
            window.addEventListener('scroll', optimizedScroll, {
                passive: true
            });
            return ({
                "useScrollLoader.useEffect": ()=>window.removeEventListener('scroll', optimizedScroll)
            })["useScrollLoader.useEffect"];
        }
    }["useScrollLoader.useEffect"], [
        handleScroll
    ]);
};
_s(useScrollLoader, "QicTqvlmOgboxnG59VKrgeCdyoc=");
const __TURBOPACK__default__export__ = useScrollLoader;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/modules/sangping.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "shangping": "sangping-module__Cusx6G__shangping",
  "text": "sangping-module__Cusx6G__text",
  "text1": "sangping-module__Cusx6G__text1",
});
}}),
"[project]/src/components/jiazai.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$sangping$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/modules/sangping.module.css [app-client] (css module)");
;
;
function ProductItem({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$sangping$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shangping,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$sangping$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                    children: product.name
                }, void 0, false, {
                    fileName: "[project]/src/components/jiazai.tsx",
                    lineNumber: 11,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$sangping$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text1,
                    children: product.miaoshu
                }, void 0, false, {
                    fileName: "[project]/src/components/jiazai.tsx",
                    lineNumber: 12,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/jiazai.tsx",
            lineNumber: 10,
            columnNumber: 8
        }, this)
    }, void 0, false);
}
_c = ProductItem;
var _c;
__turbopack_context__.k.register(_c, "ProductItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/zhujian.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Gundong)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/infinite/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$uselnfiniteScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/uselnfiniteScroll.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$jiazai$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/jiazai.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const fetcher = (url)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(url).then((res)=>res.data);
const getKey = (kaishi, jieshu)=>{
    return `/api/shuju?page=${kaishi + 1}`;
};
function Gundong() {
    _s();
    const { data, error, size, setSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(getKey, fetcher, {
        revalidateFirstPage: false,
        parallel: true
    });
    const shuju = data?.flatMap((page)=>page.shuju) || [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$uselnfiniteScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Gundong.useOnScrollBottom": ()=>{
            setSize(size + 1);
        }
    }["Gundong.useOnScrollBottom"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: shuju.map((hexing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: '/about/xiangqing/' + hexing.id,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$jiazai$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    product: hexing
                }, void 0, false, {
                    fileName: "[project]/src/components/zhujian.tsx",
                    lineNumber: 26,
                    columnNumber: 8
                }, this)
            }, hexing.id, false, {
                fileName: "[project]/src/components/zhujian.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this))
    }, void 0, false);
}
_s(Gundong, "P3LBDOEu/0ieznabOKK72fgo0X0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$uselnfiniteScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Gundong;
var _c;
__turbopack_context__.k.register(_c, "Gundong");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/modules/tupian.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "butt": "tupian-module__QbOh9q__butt",
  "button": "tupian-module__QbOh9q__button",
  "lunbou": "tupian-module__QbOh9q__lunbou",
  "tupian": "tupian-module__QbOh9q__tupian",
  "tupian1": "tupian-module__QbOh9q__tupian1",
  "tupian2": "tupian-module__QbOh9q__tupian2",
  "tupian3": "tupian-module__QbOh9q__tupian3",
  "tupian4": "tupian-module__QbOh9q__tupian4",
  "tupian5": "tupian-module__QbOh9q__tupian5",
  "tupian6": "tupian-module__QbOh9q__tupian6",
  "tupian7": "tupian-module__QbOh9q__tupian7",
  "zhu": "tupian-module__QbOh9q__zhu",
});
}}),
"[project]/src/components/tupianlunbou/tupian.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Lunbou)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/modules/tupian.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Lunbou() {
    _s();
    const [kai, shu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isindex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [transitionStyle, setTransitionStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const kaiguan = ()=>isindex.current = true;
    const guanbi = ()=>isindex.current = false;
    const postit = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`lunbou`];
    const handleMoues = ()=>{
        kaiguan();
        console.log('开', kai), console.log(isindex.current);
    };
    const hangleguan = ()=>{
        guanbi();
        console.log('关', kai, console.log(isindex.current));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lunbou.useEffect": ()=>{
            const interval = setInterval({
                "Lunbou.useEffect.interval": ()=>{
                    if (isindex.current) {
                        shu({
                            "Lunbou.useEffect.interval": (i)=>i + 1
                        }["Lunbou.useEffect.interval"]);
                    }
                }
            }["Lunbou.useEffect.interval"], 5000);
            return ({
                "Lunbou.useEffect": ()=>clearInterval(interval)
            })["Lunbou.useEffect"];
        }
    }["Lunbou.useEffect"], [
        isindex.current
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lunbou.useEffect": ()=>{
            setTransitionStyle({
                transform: `translateY(-${kai * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
            });
            if (kai == 5) {
                setTimeout({
                    "Lunbou.useEffect": ()=>(setTransitionStyle({
                            transform: `translateY(-${0}%)`,
                            transition: 'none'
                        }), setTimeout({
                            "Lunbou.useEffect": ()=>shu(0)
                        }["Lunbou.useEffect"], 100))
                }["Lunbou.useEffect"], 500);
            }
        }
    }["Lunbou.useEffect"], [
        kai
    ]);
    const handleSlideChange = (newIndex)=>{
        setTransitionStyle({
            transform: `translateY(-${newIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out'
        });
        setTimeout(()=>{
            shu(newIndex);
        }, 500); // 必须与 CSS 过渡时间匹配
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tupian,
            onMouseOver: hangleguan,
            onMouseLeave: handleMoues,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tupian1}`,
                    style: {
                        ...transitionStyle
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                    lineNumber: 49,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tupian2,
                    style: {
                        ...transitionStyle
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tupian3,
                    style: {
                        ...transitionStyle
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                    lineNumber: 51,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tupian4,
                    style: {
                        ...transitionStyle
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tupian5,
                    style: {
                        ...transitionStyle
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                    lineNumber: 53,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tupian7,
                    style: {
                        ...transitionStyle
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                    lineNumber: 54,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zhu,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].butt} ${kai + 1 == 1 ? postit : null} `,
                            onClick: ()=>handleSlideChange(0),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button
                            }, void 0, false, {
                                fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                            lineNumber: 56,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].butt} ${kai + 1 == 2 ? postit : null} `,
                            onClick: ()=>handleSlideChange(1),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button
                            }, void 0, false, {
                                fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                            lineNumber: 59,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].butt} ${kai + 1 == 3 ? postit : null} `,
                            onClick: ()=>handleSlideChange(2),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button
                            }, void 0, false, {
                                fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                            lineNumber: 62,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].butt} ${kai + 1 == 4 ? postit : null} `,
                            onClick: ()=>handleSlideChange(3),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button
                            }, void 0, false, {
                                fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                            lineNumber: 65,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].butt} ${kai + 1 == 5 ? postit : null} `,
                            onClick: ()=>handleSlideChange(4),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$tupian$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button
                            }, void 0, false, {
                                fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                            lineNumber: 68,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
                    lineNumber: 55,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tupianlunbou/tupian.tsx",
            lineNumber: 48,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(Lunbou, "XysIQjGTPL50BGeZ83bGoIOB9SE=");
_c = Lunbou;
var _c;
__turbopack_context__.k.register(_c, "Lunbou");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/gouwuceh.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCartStore": (()=>useCartStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const useCartStore = (set, get)=>({
        shangping: [],
        diaodu: true,
        time: 0,
        wangluo: true,
        huanchun: [],
        chongshi: async (id)=>{
            const { huanchun } = get();
            const shuanchun = [
                ...huanchun
            ].sort((a, b)=>a.banben - b.banben);
            const chong = shuanchun.find((i)=>i.is == false);
            shuanchun.filter((u)=>u.is != true);
            console.log(chong);
            for (const op of shuanchun){
                const sss = async ()=>{
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/api/gouwuche?id=${id}`, {
                            id: chong.key,
                            chaozhuo: chong.chaozhuo,
                            banben: chong.banben
                        }).then((res)=>console.log(res.data, '成功'));
                        set({
                            huanchun: shuanchun.filter((u)=>u.key != chong.key)
                        });
                    } catch (error) {
                        alert('超时，刷新浏览器试试');
                        set((start)=>{
                            return {
                                shangping: start.shangping.map((u)=>u.id == chong.key ? {
                                        id: u.id,
                                        shu: u.shu - 1,
                                        banben: u.banben
                                    } : u),
                                chong
                            };
                        });
                    }
                };
                setTimeout(()=>sss(), 3000);
            }
        },
        settongbu: async ()=>{
            const user = get().user;
            try {
                const hong = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/gouwuche?id=${user}`).then((res)=>res.data);
                console.log(hong);
                if (hong.ss) {
                    hong.ss.shuju = hong.ss.shuju.map((u)=>("TURBOPACK compile-time truthy", 1) ? {
                            id: u.id,
                            shu: u.shu,
                            banben: -1
                        } : ("TURBOPACK unreachable", undefined));
                    console.log(hong.ss.shuju);
                    set(()=>{
                        return {
                            shangping: hong.ss.shuju
                        };
                    });
                }
            } catch (tianjiachuowu) {
                console.log(tianjiachuowu);
            }
        },
        shangpingjia: async (id)=>{
            if (!get().wangluo) return;
            const times = Date.now();
            if (times - get().time < 500) return;
            set((start)=>{
                start.time = Date.now();
                const sid = start.shangping.find((u)=>u.id == id);
                console.log(sid);
                if (sid) {
                    return {
                        shangping: start.shangping.map((iid)=>iid.id == id ? {
                                id: id,
                                shu: iid.shu + 1,
                                banben: iid.banben + 1
                            } : iid)
                    };
                }
                return {
                    shangping: [
                        ...start.shangping,
                        {
                            id: id,
                            shu: 1,
                            banben: 0
                        }
                    ]
                };
            });
            const user = get().user;
            const shuju = get().shangping.find((u)=>u.id == id);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/api/gouwuche?id=${user}`, {
                    id: id,
                    chaozhuo: "加",
                    banben: shuju.banben
                }).then((res)=>{
                    res.data;
                    console.log(res.data);
                });
            } catch (error) {
                console.log(error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    if (error.request.status == 409) {
                        alert("超时，稍等");
                        console.log('版本冲突正在重试', error.response?.data);
                        let data = error.response?.data;
                        set((start)=>{
                            return {
                                huanchun: [
                                    ...start.huanchun,
                                    {
                                        is: false,
                                        key: data.id,
                                        banben: data.kehubanben,
                                        oldbanben: data.banben,
                                        chaozhuo: data.chaozhuo
                                    }
                                ]
                            };
                        });
                        console.log(get().huanchun);
                        console.log(get().shangping);
                        get().chongshi(user);
                    } else {
                        alert('错误请重试');
                        set((start)=>{
                            const s = start.shangping.find((u)=>u.id === id);
                            if (s.shu <= 1) {
                                return {
                                    shangping: start.shangping.filter((iid)=>iid.shu != 1)
                                };
                            } else return {
                                shangping: start.shangping.map((shang)=>shang.id == id ? {
                                        id: id,
                                        shu: shang.shu - 1,
                                        banben: shang.banben - 1
                                    } : shang)
                            };
                        });
                    }
                }
            }
        },
        shangpingjian: async (id)=>{
            const sid = get().shangping.find((u)=>u.id == id);
            if (sid.shu <= 1) return alert('减不了了');
            if (!get().wangluo) return;
            const times = Date.now();
            if (times - get().time < 500) return;
            set((start)=>{
                return {
                    shangping: start.shangping.map((iid)=>iid.id == id ? {
                            id: id,
                            shu: iid.shu - 1,
                            banben: iid.banben + 1
                        } : iid)
                };
            });
            const user = get().user;
            const shuju = get().shangping.find((u)=>u.id == id);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/api/gouwuche?id=${user}`, {
                    id: id,
                    chaozhuo: "减",
                    banben: shuju.banben
                }).then((res)=>{
                    res.data;
                    console.log(res.data);
                });
            } catch (error) {
                console.log(error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    if (error.request.status == 409) {
                        console.log('版本冲突正在重试', error.response?.data);
                        let data = error.response?.data;
                        set((start)=>{
                            return {
                                huanchun: [
                                    ...start.huanchun,
                                    {
                                        is: false,
                                        key: data.id,
                                        banben: data.kehubanben,
                                        oldbanben: data.banben,
                                        chaozhuo: data.chaozhuo
                                    }
                                ]
                            };
                        });
                        console.log(get().huanchun);
                        console.log(get().shangping);
                        get().chongshi(user);
                    } else {
                        alert('错误请重试');
                        set((statr)=>{
                            return {
                                shangping: statr.shangping.map((shang)=>shang.id == id ? {
                                        id: id,
                                        shu: shang.shu + 1
                                    } : shang)
                            };
                        });
                    }
                }
            }
        }
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/src/components/shouye.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/modules/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$top$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/modules/top.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiaodaohang$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/modules/xiaodaohang.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$fenlei1$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/modules/fenlei1.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$zhujian$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/zhujian.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tupianlunbou$2f$tupian$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tupianlunbou/tupian.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function Home1() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zhu,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Daohang, {}, void 0, false, {
                    fileName: "[project]/src/components/shouye.tsx",
                    lineNumber: 16,
                    columnNumber: 6
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sousuoo, {}, void 0, false, {
                    fileName: "[project]/src/components/shouye.tsx",
                    lineNumber: 17,
                    columnNumber: 6
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Xiaodaohang, {}, void 0, false, {
                    fileName: "[project]/src/components/shouye.tsx",
                    lineNumber: 18,
                    columnNumber: 6
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$fenlei1$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tupianlunbou$2f$tupian$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/shouye.tsx",
                            lineNumber: 20,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fenlei, {}, void 0, false, {
                            fileName: "[project]/src/components/shouye.tsx",
                            lineNumber: 21,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shouye.tsx",
                    lineNumber: 19,
                    columnNumber: 6
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$zhujian$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/shouye.tsx",
                    lineNumber: 23,
                    columnNumber: 6
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shouye.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_c = Home1;
function Daohang() {
    _s();
    const [time, settime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "Daohang.useStore[user]": (state)=>state.user
    }["Daohang.useStore[user]"]);
    const isLoggedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "Daohang.useStore[isLoggedIn]": (state)=>state.isLoggedIn
    }["Daohang.useStore[isLoggedIn]"]);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "Daohang.useStore[logout]": (state)=>state.logout
    }["Daohang.useStore[logout]"]);
    const handleclick = ()=>{
        logout();
        location.reload();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Daohang.useEffect": ()=>{
            const updateTime = {
                "Daohang.useEffect.updateTime": ()=>{
                    const now = new Date();
                    settime(now);
                    const msUntilNextSecond = 1000 - now.getMilliseconds();
                    timerRef.current = setTimeout({
                        "Daohang.useEffect.updateTime": ()=>{
                            frameRef.current = requestAnimationFrame(updateTime);
                        }
                    }["Daohang.useEffect.updateTime"], msUntilNextSecond);
                }
            }["Daohang.useEffect.updateTime"];
            frameRef.current = requestAnimationFrame(updateTime);
            return ({
                "Daohang.useEffect": ()=>{
                    cancelAnimationFrame(frameRef.current);
                    clearTimeout(timerRef.current);
                }
            })["Daohang.useEffect"];
        }
    }["Daohang.useEffect"], []);
    const newtime = `现在是北京时间:${time.toLocaleTimeString('zh-CN')}`;
    const hao = time.getHours() < 6 || time.getHours() > 18 ? '晚上好' : time.getHours() > 12 ? '下午好' : '上午好';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohang,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohang1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohang2,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohangbiaoqian,
                                children: "中国大陆"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shouye.tsx",
                                lineNumber: 61,
                                columnNumber: 9
                            }, this),
                            isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohangbiaoqian}`,
                                    children: [
                                        user,
                                        "号用户,欢迎",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiantext,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiantext1,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiantext2,
                                                    onClick: handleclick,
                                                    children: "退出登录"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shouye.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shouye.tsx",
                                                lineNumber: 64,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shouye.tsx",
                                            lineNumber: 63,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shouye.tsx",
                                    lineNumber: 62,
                                    columnNumber: 23
                                }, this)
                            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohangbiaoqian,
                                href: "/about/denglu/",
                                children: "宝贝,请登录 注册免费"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shouye.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohangbiaoqian,
                                children: "网页无障碍(待做)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shouye.tsx",
                                lineNumber: 72,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shouye.tsx",
                        lineNumber: 60,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohang3,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohangbiaoqian,
                                children: [
                                    newtime,
                                    ",",
                                    hao
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shouye.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohangbiaoqian,
                                children: !isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/about/denglu/`,
                                    prefetch: true,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shouchang,
                                    children: "购物车"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shouye.tsx",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/about/gouwuche/?id=${user}`,
                                    prefetch: true,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shouchang,
                                    children: "购物车"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shouye.tsx",
                                    lineNumber: 78,
                                    columnNumber: 12
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shouye.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohangbiaoqian,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shouchang,
                                        children: "收藏(待做)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shouye.tsx",
                                        lineNumber: 81,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].jiantou,
                                        children: ">"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shouye.tsx",
                                        lineNumber: 82,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiantext,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiantext1,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiantext2,
                                                    children: "收藏的商品"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shouye.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiantext2,
                                                    children: "收藏的店铺"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shouye.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 18
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shouye.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shouye.tsx",
                                        lineNumber: 83,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shouye.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].daohangbiaoqian,
                                children: "卖家中心(待做)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shouye.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shouye.tsx",
                        lineNumber: 74,
                        columnNumber: 8
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shouye.tsx",
                lineNumber: 59,
                columnNumber: 6
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shouye.tsx",
            lineNumber: 58,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_s(Daohang, "LZbIJlxxMOEMX5Bqki1fQchtajs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c1 = Daohang;
function Sousuoo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$top$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shousuo,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$top$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$top$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].geitupianyong,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/image/download.png",
                            alt: "taobao",
                            layout: "fill",
                            objectFit: "contain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shouye.tsx",
                            lineNumber: 104,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shouye.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$top$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shousuolan,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$top$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shousuoanliu,
                            children: "搜索"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shouye.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shouye.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shouye.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shouye.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c2 = Sousuoo;
function Xiaodaohang() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiaodaohang$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiaodaohang,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiaodaohang$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiaodaohang1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiaodaohang$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiaodaohang2,
                        children: "天猫"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shouye.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiaodaohang$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiaodaohang2,
                        children: "淘宝直播"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shouye.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiaodaohang$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiaodaohang2,
                        children: "司法拍卖"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shouye.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiaodaohang$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiaodaohang3,
                        children: "天猫超市"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shouye.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiaodaohang$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiaodaohang4,
                        children: "闲鱼集市"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shouye.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiaodaohang$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xiaodaohang4,
                        children: "天猫国际"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shouye.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shouye.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shouye.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c3 = Xiaodaohang;
function Fenlei() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$fenlei1$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].div
                }, void 0, false, {
                    fileName: "[project]/src/components/shouye.tsx",
                    lineNumber: 134,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$fenlei1$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].div1
                }, void 0, false, {
                    fileName: "[project]/src/components/shouye.tsx",
                    lineNumber: 135,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$fenlei1$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].div2
                }, void 0, false, {
                    fileName: "[project]/src/components/shouye.tsx",
                    lineNumber: 136,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$fenlei1$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].div3
                }, void 0, false, {
                    fileName: "[project]/src/components/shouye.tsx",
                    lineNumber: 137,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shouye.tsx",
            lineNumber: 133,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_c4 = Fenlei;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Home1");
__turbopack_context__.k.register(_c1, "Daohang");
__turbopack_context__.k.register(_c2, "Sousuoo");
__turbopack_context__.k.register(_c3, "Xiaodaohang");
__turbopack_context__.k.register(_c4, "Fenlei");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_96b5c922._.js.map