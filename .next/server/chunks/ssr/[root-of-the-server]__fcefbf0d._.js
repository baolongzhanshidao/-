module.exports = {

"[project]/src/styles/modules/xiangqing/xiang.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "jiaru": "xiang-module__rUILWa__jiaru",
  "shangping": "xiang-module__rUILWa__shangping",
  "zhu": "xiang-module__rUILWa__zhu",
});
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/store/gouwuceh.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCartStore": (()=>useCartStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
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
                        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`/api/gouwuche?id=${id}`, {
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
                const hong = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/gouwuche?id=${user}`).then((res)=>res.data);
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`/api/gouwuche?id=${user}`, {
                    id: id,
                    chaozhuo: "加",
                    banben: shuju.banben
                }).then((res)=>{
                    res.data;
                    console.log(res.data);
                });
            } catch (error) {
                console.log(error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`/api/gouwuche?id=${user}`, {
                    id: id,
                    chaozhuo: "减",
                    banben: shuju.banben
                }).then((res)=>{
                    res.data;
                    console.log(res.data);
                });
            } catch (error) {
                console.log(error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
}}),
"[project]/src/store/denglu.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAuthStore": (()=>useAuthStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const useAuthStore = (set, get)=>({
        user: null,
        isLoggedIn: false,
        log: ()=>{
            set({
                isLoggedIn: true
            });
            get().settongbu();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`/api/gouwuche?cz=1`).then((res)=>console.log(res.data));
        },
        logout: ()=>set({
                isLoggedIn: false,
                user: null
            }),
        setuser: (id)=>set({
                user: id
            })
    });
}}),
"[project]/src/store/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useStore": (()=>useStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$gouwuceh$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/gouwuceh.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$denglu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/denglu.ts [app-ssr] (ecmascript)");
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
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])(wangluo((set, get)=>({
        // 购物车
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$gouwuceh$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])(set, get),
        // 登录
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$denglu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])(set, get)
    })));
}}),
"[project]/src/components/xiangqing/xiang.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Xiang)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiangqing$2f$xiang$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/modules/xiangqing/xiang.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Xiang({ id }) {
    const { user, shangpingjia, isLoggedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])();
    const [tis, tishi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleclick = ()=>{
        if (isLoggedIn) {
            shangpingjia(id);
        } else router.push(`/about/denglu/`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiangqing$2f$xiang$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].zhu,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiangqing$2f$xiang$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shangping,
                    children: [
                        "这是第",
                        id,
                        "号商品"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/xiangqing/xiang.tsx",
                    lineNumber: 22,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleclick,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$modules$2f$xiangqing$2f$xiang$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].jiaru,
                    children: "加入购物车"
                }, void 0, false, {
                    fileName: "[project]/src/components/xiangqing/xiang.tsx",
                    lineNumber: 23,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/xiangqing/xiang.tsx",
            lineNumber: 21,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__fcefbf0d._.js.map