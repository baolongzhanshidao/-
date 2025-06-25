import { data } from "@/lib/db.ts/mocks";
import { db } from "@/lib/db.ts/user";
import { NextResponse } from "next/server";
interface lei{
    id:number
    user:string
}
export async function POST(request:Request,{params}:{params:any}){
    const {id,user} = await params
    db.putshangping(id,user)
    return NextResponse.json(
        true
    )
}
