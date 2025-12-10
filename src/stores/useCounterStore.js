import { create } from 'zustand'

export const useCounterStore = create(set => ({
  count: 0,
  menuProducts: [],

  increment: () => set(state => ({ count: state.count + 1 })),
  postProduct: (product) =>
  set(state => {
    const exists = state.menuProducts.some((p) => p.id === product.id)
    if (exists) return state // No duplicar

    return { menuProducts: [...state.menuProducts, product] }
  }),
}))
