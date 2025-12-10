import { useGetData } from '../hooks/useGetData'
import { useCounterStore } from '../stores/useCounterStore'

export function Product () {
  const { data } = useGetData({ url: 'https://fakestoreapi.com/products' })
  const { increment } = useCounterStore()

  const handelClick = () => {
    increment()
  }

  return (
    <>
      <div className='grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]'>
        {data?.map(product => (
          <div
            key={product.id}
            className='bg-white rounded-xl shadow p-4 flex flex-col'
          >
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-48 object-cover rounded'
              loading='lazy'
            />

            <h2 className='font-semibold text-lg mt-3'>{product.title}</h2>
            <p className='text-gray-600 text-sm mt-1 line-clamp-2'>
              {product.description}
            </p>

            <span className='font-bold text-indigo-600 mt-3 text-lg'>
              ${product.price}
            </span>

            <button className='mt-auto bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700' onClick={handelClick}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
