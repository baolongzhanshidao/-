module.exports = {

"[project]/.next-internal/server/app/api/gouwuche/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/db.ts/user.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "db": (()=>db),
    "shangpingshuju": (()=>shangpingshuju)
});
let users = [];
let shangpingshuju = [];
const db = {
    // 查找用户
    findUser: (email)=>users.find((user)=>user.email === email),
    // 创建用户
    createUser: (email, password)=>{
        const user = {
            email,
            password
        };
        users.push(user);
    },
    // 验证用户
    authenticate: (email, password)=>{
        const user = users.find((u)=>u.email === email);
        const zhuangtai = user && user.password === password ? true : false;
        return zhuangtai;
    },
    putshangping: (email, id)=>{
        const sang = users.find((i)=>i.email === email);
        if (sang) sang.id = id;
    },
    // 用户购物车
    gouwuche1: (id, chaozhuo, uid)=>{
        const ss = shangpingshuju.find((u)=>u.id == uid);
        if (ss) {
            const s = ss.shuju.find((u)=>u.id == id);
            if (s) if (chaozhuo == "加") ss.shuju = ss.shuju.map((s)=>s.id == id ? {
                    id: id,
                    shu: s.shu + 1
                } : s);
            else {
                ss.shuju = ss.shuju.map((s)=>s.id == id ? {
                        id: id,
                        shu: s.shu - 1
                    } : s);
                ss.shuju.filter((n)=>n.shu != 0);
            }
            else {
                ss.shuju.push({
                    id: id,
                    shu: 1
                });
            }
        } else {
            shangpingshuju.push({
                id: uid,
                shuju: [
                    {
                        id: id,
                        shu: 1
                    }
                ]
            });
        }
        return ss?.shuju;
    },
    goucu: (id)=>{
        const s = shangpingshuju.find((u)=>u.id == id);
        if (s != null) return s;
        return false;
    }
};
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[project]/src/lib/Redis/db.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "redis": (()=>redis)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/redis/nodejs.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/redis/nodejs.mjs [app-route] (ecmascript) <locals>");
;
const redis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Redis"]({
    url: 'https://enormous-unicorn-51679.upstash.io',
    token: 'AcnfAAIjcDE1ZWY5Nzc5YzQzOGQ0NGI4ODE4ZTMxNDAwNGRlNGM3ZHAxMA'
});
}}),
"[project]/src/app/api/gouwuche/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts/user.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Redis$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/Redis/db.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    const { searchParams } = new URL(request.url);
    const uid = parseInt(searchParams.get('id') || 'null');
    let cz = parseInt(searchParams.get('cz') || 'true');
    if (cz) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Redis$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].flushdb();
        cz = false;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            cz
        });
    } else {
        const { id, chaozhuo, banben } = await request.json();
        const key = `key:${id}`;
        const a = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Redis$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].get(key);
        if (!a) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Redis$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].set(key, JSON.stringify({
                id: id,
                chaozhuo: chaozhuo,
                banben: 0
            }));
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].gouwuche1(id, chaozhuo, uid);
        } else if (a.banben == banben - 1) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Redis$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].set(key, JSON.stringify({
                id: id,
                chaozhuo: chaozhuo,
                banben: banben
            }));
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].gouwuche1(id, chaozhuo, uid);
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                kehubanben: banben,
                banben: a.banben,
                id: id,
                chaozhuo: chaozhuo
            }, {
                status: 409
            });
        }
        const s = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shangpingshuju"];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            banben: banben,
            id: id,
            s
        });
    }
}
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') || 'null');
    const ss = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].goucu(id);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ss
    });
}
async function luanxuchuli(banben, key, chaozhuo, id, uid) {
    const newkey = key + (banben - 1);
    const chongshi = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Redis$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].get(newkey);
    if (chongshi) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].gouwuche1(id, chaozhuo, uid);
        return true;
    } else false;
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d9bed2d4._.js.map