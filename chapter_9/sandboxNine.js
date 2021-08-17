const products = [
  { name: 'foo', price: 20, description: 'great' },
  { name: 'bar', price: 30, description: 'great' },
  { name: 'baz', price: 40, description: 'great' },
  { name: 'quux', price: 60, description: 'great' },
  { name: 'chix', price: 80, description: 'greater' },
]


const salesProducts = products.map(product => {
  if (product.price > 50) {
     product.name = 'greatest boy ever'
    // return { score: 'greatest boy ever'}
  }
  return product
})

console.log(salesProducts, products);