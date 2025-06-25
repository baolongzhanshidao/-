import axios from "axios"
export type lei={
   isLoggedIn:true|false
   log:()=>void
   logout:()=>void
   user:string|null
   setuser:(id:string)=>any
}

export const useAuthStore =
(set:any,get:any):lei=>({
    user:null,
    isLoggedIn: false,
    log:()=>{
    set({isLoggedIn:true})
    get().settongbu()
    axios.post(`/api/gouwuche?cz=1`).then(res=>console.log(res.data))
    },
    logout:()=>set({isLoggedIn:false,user:null}),
    setuser:(id:string)=>set({user:id})
})

