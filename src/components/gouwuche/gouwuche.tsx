'use client'
import css from '@/styles/modules/gouwuche/gouwu.module.css'
import {useStore} from "@/store/index"
import axios from 'axios'
export default function Gouwuche(){
    let shangping = useStore(state=>state.shangping)
    const shangpingjia = useStore(state=>state.shangpingjia)
    const shangpingjian = useStore(state=>state.shangpingjian)
    const handleclick = (id:number)=>{
        shangpingjia(id)
    }
    const handleclick2 = (id:number)=>{
        shangpingjian(id)
    }
    return(
        <>
        
    {shangping.map((shang:any)=>(
        <div key={shang.id}>
         <div className={css.zhu1}>
          <span className={css.zhu}>欢迎<br/>光临</span>
          <span className={css.hao}> 这是{shang.id}号商品</span>
          <span className={css.jiajian}>
            <button className={css.zhiti} onClick={()=>handleclick(shang.id)}>+</button>
            <p className={css.zhiti}>{shang.shu}</p> 
            <button className={css.zhiti1} onClick={()=>handleclick2(shang.id)}>-</button>
            </span>
        </div>
        </div>
       
    ))}
        </>
    )
}