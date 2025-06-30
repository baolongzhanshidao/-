import { create } from 'zustand';
import { useCartStore,gouwuche } from './gouwuceh';
import { useAuthStore,lei } from './denglu';
import { useEffect } from 'react';
export type StoreState = lei & gouwuche
const wangluo = (config:any) =>(set:any,get:any,api:any)=>{
  const newset = (ll:any)=>{ 
    const handleoffline = ()=>{
    return set({wangluo:false})
    
   }
   const handleonline = ()=>{
    return set({wangluo:true})
   }
   window.addEventListener("offline", handleoffline)
   window.addEventListener("online", handleonline)
   return set(ll);
  
  }
  
   return config(newset,get,api)
}

export const useStore = create<StoreState>(
  wangluo((set: any,get: any) => ({
// 购物车
    ...useCartStore(set,get),
// 登录
    ...useAuthStore(set,get)
  }))
)
