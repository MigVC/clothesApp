

export const GetProductById = (product, id) => {
  return product.find((pro) => pro.id===Number(id))
}
