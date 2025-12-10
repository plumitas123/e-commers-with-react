import { useState } from "react"

export function Filters () {
    const [categoria, setCategoria] = useState("Todos")

    const handleChange = (e) => {
        setCategoria(e.target.value)
    }

  return (
    <>
      <div class='flex flex-col gap-1 mb-2'>
        <label class='text-xs text-gray-600'>Categoría</label>
        <select class='border border-gray-300 rounded-xl px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white
        ' value={categoria} onChange={handleChange} >
          <option value="Todos">Todos</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
      </div>
    </>
  )
}
