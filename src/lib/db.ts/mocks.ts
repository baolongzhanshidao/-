const generateProducts = (count: number) => 
    Array.from({ length: count }, (_, i) => ({
    id: i+1,
    name: `商品 ${i + 1}`,
    miaoshu: `这是商品 ${i + 1} 的详细描述`,
    xiang:`这是第${i+1}号商品商品详情页`,
    xiangxi:`这是第${i+1}号商品商品详情`
  }));

export const data = generateProducts(1000)
