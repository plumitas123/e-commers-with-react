import { Filters } from './Filters'
import { Card } from './Cart'

export function Header () {
  return (
    <header className='my-8 w-full'>
      <h1 className='text-4xl font-bold text-center'>Tienda en línea</h1>
      <div className='flex items-center justify-around w-full'>
        <Filters />
        <Card />
      </div>
    </header>
  )
}
