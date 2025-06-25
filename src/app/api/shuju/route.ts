import { data } from "@/lib/db.ts/mocks";
import { NextResponse } from "next/server";
export async function GET(request:Request) {

    const {searchParams} = new URL(request.url)
    const page = parseInt(searchParams.get('page')||'1')
    const pageSize = 20
    const start =(page-1)*pageSize
    const end = start+pageSize
    const shuju = data.slice(start,end)
    const hasMore = 1000
    return NextResponse.json({
        shuju,
        hasMore
    })
}