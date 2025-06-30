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
export async function generateStaticParams() {
  const popj = [1,2,3,4,5,6]
  return popj.map(id=>({id}))
}