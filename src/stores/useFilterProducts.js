import { create } from "zustand";

export const useFilterProducts = create((set) => ({
  stateCategory: "Todos",        // categoría activa

  setFilterCategory: (category) =>
    set(() => ({
      stateCategory: category
    })),

  filterProducts: [],            // si querés guardar los filtrados
  setFilterProducts: (products) =>
    set(() => ({
      filterProducts: products
    }))
}));
