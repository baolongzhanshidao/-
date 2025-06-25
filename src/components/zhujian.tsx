import useSWRInfinite from "swr/infinite";
import axios from "axios";
import useOnScrollBottom from "@/hooks/uselnfiniteScroll";
import ProductItem from "./jiazai";
import Link from "next/link";
const fetcher = (url: string) => axios.get(url).then
(res=>res.data)
const getKey = (kaishi:number,jieshu:number) =>{
   
     return `/api/shuju?page=${kaishi + 1}`
}

export default function Gundong(){
  const {data,error,size,setSize} = useSWRInfinite(getKey,fetcher,{
    revalidateFirstPage:false,
    parallel:true
  })
  const shuju = data?.flatMap(page=>page.shuju)||[]
  useOnScrollBottom(()=>{
       setSize(size+1)
})
return(
  <>
    {shuju.map((hexing)=>(
      <Link href={'/about/xiangqing/'+hexing.id} key={hexing.id}>
       <ProductItem  product={hexing} ></ProductItem>
      </Link>
    ))}
  </>
)
}
