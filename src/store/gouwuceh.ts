import axios from "axios";
import { start } from "repl";
interface Cart{
  id:number
  shu:number
  banben:number
}
interface Culi{
  is:boolean
  key:string
  banben:number
  oldbanben:number
  chaozhuo:string
}
export interface gouwuche {
   shangping:Cart[]
   shangpingjia:(id:number)=>void
   settongbu:(shuju:any)=>void
   shangpingjian:(id:number)=>void
   time:number,
   wangluo:boolean,
   huanchun:Culi[],
   chongshi:(id:number)=>void
}
export const useCartStore = (set:any,get:any):gouwuche => ({  
     shangping:[],
     time:0,
     wangluo:true,
     huanchun:[],
     chongshi:async(id:number)=>{
       const {huanchun} = get()
       huanchun.filter((u: { is: boolean; })=>u.is!=true)
       const chong = huanchun.find((i: { is: boolean; })=>i.is==false)
       const chongshi =async ()=>{
        try{
         await axios.post(`/api/gouwuche?id=${id}`,{id:id,chaozhuo:chong.chaozhuo,banben:chong.banben})
         chong.map((u: any)=>true?{is: true}:null)
         alert('重试成功')
        }catch(error){
         alert('超时，刷新浏览器试试')
        }
       }
       setTimeout(chongshi,3000)
     },
     settongbu: async ()=>{
      const user = get().user
      try{
      const hong = await axios.get(`/api/gouwuche?id=${user}`).then(res=>res.data)
      console.log(hong)
      if (hong.ss){
        hong.ss.shuju = hong.ss.shuju.map((u: any)=>true?{id:u.id,shu:u.shu,banben:-1}:null)
        console.log(hong.ss.shuju)
        set(()=>{return{ shangping:hong.ss.shuju}
        
     })}
    } catch(tianjiachuowu){console.log(tianjiachuowu)}
    },
    shangpingjia: async (id:number)=>{
      if(!get().wangluo) return ;
      const times = Date.now()
      if((times-get().time)<500) return ;
      set((start:any)=>{
        start.time = Date.now()
        const sid = start.shangping.find((u: { id: number,shu:number })=>u.id==id)
        console.log(sid)
      if(sid)
      { 
        return{ 
         shangping:start.shangping.map((iid:any)=>iid.id==id?
        {id:id,shu:iid.shu+1,banben:iid.banben+1}:iid),
        }
      }
      return{
          shangping:[...start.shangping,{id:id,shu:1,banben:0}],
      }
      })
      const user = get().user
      const shuju = get().shangping.find((u: { id: number; })=>u.id==id)
    try{     
      await axios.post(`/api/gouwuche?id=${user}`,{id:id,chaozhuo:"加",banben:shuju.banben})
      .then(res=>{res.data;console.log(res.data);})
    } catch(error){
      console.log(error)
      if(axios.isAxiosError(error)){
        if(error.request.status == 409){
          console.log('版本冲突正在重试',error.response?.data)
          let data = error.response?.data
          set((start:any)=>{
            return start.huanchun.push({is:false,key:`/api/gouwuche?id=${data.id}`,banben:shuju.banben,oldbanben:data.banben,chaozhuo:data.chaozhuo})})
          get().chongshi()
        }
      }else alert('错误请重试')
      set((start:any)=>{
         const s = start.shangping.find((u: { id: number,shu:number })=>u.id===id)
         if(s.shu<=1){return {shangping:start.shangping.filter((iid: any)=>iid.shu!=1)}}
         else return  {shangping: start.shangping.map((shang:{id:number,shu:number})=>shang.id==id?{id:id,shu:shang.shu-1}:shang)}
        })
        
    }
    },
      shangpingjian: async (id:number)=>{
      const sid = get().shangping.find((u: { id: number })=>u.id==id)
      if(sid.shu<=1) return alert('减不了了')
      if (!get().wangluo) return ;
      const times = Date.now()
      if((times-get().time)<500) return ;
      set((start:any)=>{
      return{
         shangping:start.shangping.map((iid:any)=>
              iid.id==id?{id:id,shu:iid.shu-1,banben:iid.banben+1}:iid),
        }
      })
      const user = get().user
      const shuju = get().shangping.find((u: { id: number; })=>u.id==id)
    try{ 
     await axios.post(`/api/gouwuche?id=${user}`,{id:id,chaozhuo:"减",banben:shuju.banben})
     .then(res=>{res.data;console.log(res.data);})
    } catch(error){
      console.log(error)
      if(axios.isAxiosError(error)){
        if(error.request.status == 409){
          console.log('版本冲突正在重试',error.response?.data)
          let data = error.response?.data
          set((start:any)=>{
            return start.huanchun.push({is:false,key:`/api/gouwuche?id=${data.id}`,banben:shuju.banben,oldbanben:data.banben,chaozhuo:data.chaozhuo})})
          get().chongshi()
        }}
      alert('错误请重试')
      set((statr:any)=>{
         return  {shangping:statr.shangping.map((shang:{id:number,shu:number})=>shang.id==id?{id:id,shu:shang.shu+1}:shang)}
      })
    }
    },
    
})
     