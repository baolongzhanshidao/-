import css from '@/styles/modules/sangping.module.css'
type Product={
  id:number
  name:string
  miaoshu:string
}
export default function ProductItem({product}:{product:Product}){
    return(
      <>
       <div className={css.shangping}>
          <div className={css.text}>{product.name}</div>
          <div className={css.text1}>{product.miaoshu}</div>
       </div>
      </>
    )
}