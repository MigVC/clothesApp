

export const GetProductbyCategory = (product, category) => {
    return product.filter((pro) => pro.category===category)
}
