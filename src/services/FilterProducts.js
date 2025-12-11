import { useFilterProducts } from "../stores/useFilterProducts"

export const filterProducts = (data) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const stateCategory = useFilterProducts(state => state.stateCategory)

  const filteredProduct = data?.filter(product => {
    if (stateCategory === 'Todos') return true
    return product.category.toLowerCase().includes(stateCategory.toLowerCase())
  })
  return filteredProduct
}
