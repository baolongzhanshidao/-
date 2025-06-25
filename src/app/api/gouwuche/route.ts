import { NextResponse } from "next/server";
import { db,shangpingshuju }from "@/lib/db.ts/user";
import { redis } from "@/lib/Redis/db";
interface ges{
    id:number
    shuju:any
    banben:number
}
export async function POST(request:Request) {
    const {searchParams} = new URL(request.url)
    const uid = parseInt(searchParams.get('id')||'null')
    let cz:any = parseInt(searchParams.get('cz')||'true')
    if(cz){ await redis.flushdb();cz=false;return NextResponse.json({cz})}
    else{
    const {id,chaozhuo,banben} = await request.json()
    const key = `key:${id}`
    const a:any = await redis.get(key)
    if(!a){ 
        await redis.set(key,JSON.stringify({id:id,chaozhuo:chaozhuo,banben:0}))
        db.gouwuche1(id,chaozhuo,uid)
    }
    else if(a.banben ==(banben-1)){
        await redis.set(key,JSON.stringify({id:id,chaozhuo:chaozhuo,banben:banben}))
        db.gouwuche1(id,chaozhuo,uid)
    }
    else {
       return NextResponse.json({
      banben:banben,
      id:id,
      chaozhuo:chaozhuo
    }, { status: 409 });
    }
     const s =shangpingshuju
    return NextResponse.json({
      banben:banben,
      id:id,
      s
    }, { status: 200 });
}
}
export async function GET(request:Request) {
    const {searchParams} = new URL(request.url)
    const id = parseInt(searchParams.get('id')||'null')
    const ss = db.goucu(id)
    return NextResponse.json({
       ss
    })
}
async function luanxuchuli(banben:number,key:string,chaozhuo:string,id:number,uid:number){
    const newkey = key+(banben-1)
    const chongshi  = await redis.get(newkey)
    if(chongshi){ db.gouwuche1(id,chaozhuo,uid)
        return true
    }
    else false
    
}