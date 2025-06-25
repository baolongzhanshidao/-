interface Cart{
  id:number
  shu:number

}
interface s {
  id:number
  shuju:Cart[]
}
 let users: any[] = []
export let shangpingshuju:s[] = []
export const db = {
  // 查找用户
  findUser: (email: any) => users.find(user => user.email === email),
  // 创建用户
  createUser: (email: any, password: any) => {
    const user = { 
      email,
      password
    };
    users.push(user);
  },
  // 验证用户
  authenticate: (email: any, password: any) => {
    const user = users.find(u => u.email === email);
    const zhuangtai = user && user.password === password ? true :false;
    return zhuangtai
  },
  putshangping:(email:any,id:string)=>{
    const sang = users.find(i=>i.email ===email)
    if(sang) sang.id=id
  },
  // 用户购物车
  gouwuche1:(id:number,chaozhuo:string,uid:number)=>{
     const ss = shangpingshuju.find((u:s)=>u.id==uid)
     if(ss){
      const s = ss.shuju.find((u:any)=>u.id==id)
      if(s)
      if(chaozhuo =="加")
      ss.shuju = ss.shuju.map((s)=>s.id==id?{id:id,shu:s.shu+1}:s)
      else{
      ss.shuju = ss.shuju.map((s)=>s.id==id?{id:id,shu:s.shu-1}:s)
      ss.shuju.filter((n)=>n.shu!=0)
      }
      else{
        ss.shuju.push({id:id,shu:1})
      }
     }
     else{
      shangpingshuju.push({id:uid,shuju:[{id:id,shu:1}]})
    }
    return ss?.shuju
  },
  goucu:(id:number)=>{
    const s = shangpingshuju.find((u:any)=>u.id==id)
    if(s!=null) return s
    return false
  } ,
}
