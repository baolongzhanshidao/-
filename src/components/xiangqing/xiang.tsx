'use client'
import cssx from '@/styles/modules/xiangqing/xiang.module.css'
import useSWR from 'swr'
import axios from 'axios'
import {useStore} from '@/store'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function Xiang({id}:{id:number}){
  const {user,shangpingjia,isLoggedIn} = useStore()
  const [tis,tishi] = useState(false)
  const router = useRouter()
  const handleclick = ()=> {
    if (isLoggedIn){
    shangpingjia(id)
  }
  else
    router.push(`/about/denglu/`)
  }
    return(
        <>
        <div className={cssx.zhu}>
            <div className={cssx.shangping}>这是第{id}号商品</div>
            <button onClick={handleclick} className={cssx.jiaru}>加入购物车</button>
        </div>
        </>
    )
}