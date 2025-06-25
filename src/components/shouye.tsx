'use client'
import Image from "next/image";
import css from '@/styles/modules/page.module.css'
import topcss from '@/styles/modules/top.module.css'
import xiao from '@/styles/modules/xiaodaohang.module.css'
import fenlei from '@/styles/modules/fenlei1.module.css'
import Gundong from "./zhujian";
import  Lunbou  from "./tupianlunbou/tupian";
import Link from "next/link";
import { useStore } from "@/store/index";
import { useEffect, useState } from "react";
export default function Home1() {
  return( 
    <>
    <div className={css.zhu}>
     <Daohang></Daohang>
     <Sousuoo></Sousuoo>
     <Xiaodaohang></Xiaodaohang>
     <div className={fenlei.grid}>
      <Lunbou></Lunbou>
      <Fenlei></Fenlei>
     </div>
     <Gundong></Gundong>
    </div>
  </>
  )
}
function Daohang(){
  const [time,settime] = useState(new Date())
  const user = useStore(state =>state.user)
  const isLoggedIn = useStore(state=>state.isLoggedIn)
  const logout = useStore(state=>state.logout)
  const handleclick = ()=>{
    logout()
    location.reload()
  }
  useEffect(()=>{
  const news = setInterval(()=>settime(new Date()),1000)
  return ()=>clearInterval(news)
  },[])
  const hao = (time.getHours()<6 || time.getHours()>18)?'晚上好':(time.getHours()>12)?'下午好':'上午好'
  return(
    <>
    <div className={css.daohang}>
     <div className={css.daohang1}>
       <ul className={css.daohang2}>
        <li className={css.daohangbiaoqian}>中国大陆</li>
        {isLoggedIn?<><li className={`${css.daohangbiaoqian}`}>{user}号用户,欢迎
                    <div className={css.xiantext}>
                      <div className={css.xiantext1}>
                        <a className={css.xiantext2} onClick={handleclick}>退出登录</a>
                      </div>
                    </div>
                    </li>
                    </>
                    
        : <Link className={css.daohangbiaoqian} href="/about/denglu/">宝贝,请登录 注册免费</Link>}
        <li className={css.daohangbiaoqian}>网页无障碍(待做)</li>
       </ul>
       <ul className={css.daohang3}>
          <li className={css.daohangbiaoqian}>{`现在是北京时间:${time.toLocaleTimeString('zh-CN')},${hao}`}</li>
          <li className={css.daohangbiaoqian}>
          {!isLoggedIn? <Link href={`/about/denglu/`} prefetch={true} className={css.shouchang}>购物车</Link>
          :<Link href={`/about/gouwuche/?id=${user}`} prefetch={true} className={css.shouchang}>购物车</Link>}
          </li>
          <li className={css.daohangbiaoqian}>
             <span className={css.shouchang}>收藏(待做)</span>
             <span className={css.jiantou}>&gt;</span>
             <div className={css.xiantext}>
                <div className={css.xiantext1}>
                 <a className={css.xiantext2}>收藏的商品</a>
                 <a className={css.xiantext2}>收藏的店铺</a>
                </div>
             </div>
          </li>
          <li className={css.daohangbiaoqian}>卖家中心(待做)</li>
        </ul>
     </div>
    </div>

    </>
  )
}
function Sousuoo(){
  return(
    <>
      <div className={topcss.shousuo}>
        <div className={topcss.top}>
          <a className={topcss.geitupianyong}>
           <Image src={"/image/download.png"} alt="taobao" layout="fill" objectFit="contain"></Image>
          </a>
          <div className={topcss.shousuolan}>
            <button className={topcss.shousuoanliu}>搜索</button>
          </div>
        </div>
      </div>
    </> 
  )
}
function Xiaodaohang(){
  return(
    <>
      <div className={xiao.xiaodaohang}>
        <div className={xiao.xiaodaohang1}>
          <a className={xiao.xiaodaohang2}>天猫</a>
          <a className={xiao.xiaodaohang2}>淘宝直播</a>
          <a className={xiao.xiaodaohang2}>司法拍卖</a>
          <a className={xiao.xiaodaohang3}>天猫超市</a>
          <a className={xiao.xiaodaohang4}>闲鱼集市</a>
          <a className={xiao.xiaodaohang4}>天猫国际</a>
        </div>
      </div>
    </>
  )
}
function Fenlei(){
  return(
    <>
    <div>
      <div className={fenlei.div}></div>
      <div className={fenlei.div1}></div>
      <div className={fenlei.div2}></div>
      <div className={fenlei.div3}></div>
    </div>
    </>
  )
}
