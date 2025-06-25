import Xiang from "@/components/xiangqing/xiang"

type Product={
  xiang:number

}
export default async function Home({params}:{params:any} ){
   const {xiang} = await params
    return(
        <>
        <Xiang id={xiang}/>
        </>
    )
}