import { Filters } from './Filters'
import { Card } from './Cart'

export function Header() {
  return (
    <header className="my-8 w-full px-4 md:px-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
        Tienda en línea
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-full max-w-5xl mx-auto">
        <Filters />
        <Card />
      </div>
    </header>
  )
}

