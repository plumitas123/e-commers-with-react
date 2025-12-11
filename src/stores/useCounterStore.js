import { create } from 'zustand'

export const useCounterStore = create(set => ({
  count: 0,
  menuProducts: [],

  increment: () => set(state => ({ count: state.count + 1 })),
  postProduct: product =>
    set(state => {
      const exists = state.menuProducts.find(p => p.id === product.id)

      // Si ya existe → aumentar cantidad
      if (exists) {
        return {
          menuProducts: state.menuProducts.map(p =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          )
        }
      }

      // Si no existe → agregarlo con cantidad = 1
      return {
        menuProducts: [...state.menuProducts, { ...product, quantity: 1 }]
      }
    })
}))
