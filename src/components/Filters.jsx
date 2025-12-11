import { useFilterProducts } from "../stores/useFilterProducts"

export function Filters() {
  const stateCategory = useFilterProducts(state => state.stateCategory)
  const setFilterCategory = useFilterProducts(state => state.setFilterCategory)

  const handleChange = (e) => {
    setFilterCategory(e.target.value)
  }

  return (
    <div className="p-4 bg-gray-900 rounded-xl shadow-md w-full max-w-sm">
      <label className="block mb-2 text-sm font-medium text-gray-300">
        Filtrar por categoría
      </label>

      <select
        value={stateCategory}
        onChange={handleChange}
        className="
          w-full px-4 py-3 text-sm rounded-lg shadow-md
          bg-gray-800 text-white
          border border-gray-700
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          hover:bg-gray-700
          transition
        "
      >
        <option value="Todos">Todos</option>
        <option value="electronics">Electrónica</option>
        <option value="men's clothing">Hombre</option>
        <option value="women's clothing">Mujer</option>
      </select>
    </div>
  )
}
