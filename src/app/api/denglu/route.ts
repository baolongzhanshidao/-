import { db } from "@/lib/db.ts/user";
import { NextResponse } from "next/server";
export async function POST(request:Request) {
    const {searchParams} = new URL(request.url)
    const id = parseInt(searchParams.get('id')||'错误')
    const password = parseInt(searchParams.get('password')||'错误')
    const res = db.findUser(id)
    db.createUser(id,password)
    const c = res!=undefined?false:true
    return NextResponse.json(
         c   
    )
}
export async function GET(request:Request) {
    const {searchParams} = new URL(request.url)
    const id = parseInt(searchParams.get('id')||'错误')
    const password = parseInt(searchParams.get('password')||'错误')
    const jieguo = db.authenticate(id,password)
    return NextResponse.json(
        jieguo,
        
    )
}