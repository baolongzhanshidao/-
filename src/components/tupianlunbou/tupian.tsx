import { useState,useRef,useEffect, CSSProperties } from "react";
import css from '@/styles/modules/tupian.module.css'
export default function Lunbou(){
    const [kai,shu] = useState(0)
    const isindex = useRef(true)
    const [transitionStyle, setTransitionStyle] = useState<CSSProperties>({});
    const api = useRef<HTMLDivElement>(null)
    const kaiguan = ()=>isindex.current = true
    const guanbi = ()=>isindex.current = false
    const postit = css[`lunbou`]
    const handleMoues = ()=>{kaiguan();console.log('开',kai),console.log(isindex.current)}
    const hangleguan = ()=>{guanbi();console.log('关',kai,console.log(isindex.current))}
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(isindex.current)
            {
            shu(i =>(i+1))
            }
        }
        ,5000)
        return () => clearInterval(interval);
    },[isindex.current])
      useEffect(() => {
            setTransitionStyle({
                transform: `translateY(-${(kai) * 100}%)`,
                transition: 'transform 0.5s ease-in-out' ,
            });
            if(kai == 5)
            {   
                setTimeout(()=>(
                setTransitionStyle({
                transform: `translateY(-${0}%)`,
                transition: 'none' ,
            }),setTimeout(()=>shu(0),100)),500)
        }
        }, [kai]);
    const handleSlideChange = (newIndex: number) => {
    setTransitionStyle({
      transform: `translateY(-${newIndex * 100}%)`,
      transition: 'transform 0.5s ease-in-out'
    });
    setTimeout(() => {
      shu(newIndex);
    }, 500); // 必须与 CSS 过渡时间匹配
  };
    return(
        <>
        <div className={css.tupian} onMouseOver={hangleguan} onMouseLeave={handleMoues}>
            <a className={`${css.tupian1}`} style={{...transitionStyle}}></a>
            <a className={css.tupian2} style={{...transitionStyle}}></a>
            <a className={css.tupian3} style={{...transitionStyle}}></a>
            <a className={css.tupian4} style={{...transitionStyle}}></a>
            <a className={css.tupian5} style={{...transitionStyle}}></a>
            <a className={css.tupian7} style={{...transitionStyle}}></a>
            <ul className={css.zhu}>
                <li className={`${css.butt} ${(kai+1) == 1?postit:null} `} onClick={()=>handleSlideChange(0)} >
                    <button className={css.button } ></button>
                </li>
                <li className={`${css.butt} ${(kai+1) == 2?postit:null} `}onClick={()=>handleSlideChange(1)}>
                    <button className={css.button }></button>
                </li>
                <li className={`${css.butt} ${(kai+1) == 3?postit:null} `}onClick={()=>handleSlideChange(2)}>
                    <button className={css.button}></button>
                </li>
                <li className={`${css.butt} ${(kai+1) == 4?postit:null} `}onClick={()=>handleSlideChange(3)}>
                    <button className={css.button}></button>
                </li>
                <li className={`${css.butt} ${(kai+1) == 5 ?postit:null} `}onClick={()=>handleSlideChange(4)}>
                    <button className={css.button}></button>
                </li>
               
            </ul>
        </div>
        
        </>
    )
}