import { IoIosClose } from 'react-icons/io'
import { useCounterStore } from '../stores/useCounterStore'

export function CartMenu ({ isShowMenu, setIsShowMenu }) {
  const menuProducts = useCounterStore(state => state.menuProducts)

  return (
    <section
      className={`
        fixed inset-0 z-50 transition-opacity duration-300 
        ${
          isShowMenu
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }
        bg-black/40 backdrop-blur-sm
      `}
    >
      {/* Panel lateral del carrito */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 md:w-96 bg-white shadow-xl 
          transform transition-transform duration-300 
          flex flex-col
          ${isShowMenu ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className='flex items-center justify-between p-4 border-b'>
          <h2 className='font-semibold text-lg'>Carrito</h2>
          <IoIosClose
            size={35}
            color='black'
            className='cursor-pointer hover:text-red-500 transition'
            onClick={() => setIsShowMenu(false)}
          />
        </div>

        {/* Lista scrollable */}
        <div className='flex-1 overflow-y-auto p-4 space-y-4'>
          {menuProducts.length === 0 ? (
            <p className='text-gray-500 text-center mt-10'>
              El carrito está vacío
            </p>
          ) : (
            menuProducts.map(item => (
              <div
                key={item.id}
                className='flex items-center gap-3 bg-gray-100 rounded-xl p-3 shadow-sm'
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-16 h-16 object-contain rounded'
                />

                <div className='flex-1'>
                  <p className='font-medium text-sm line-clamp-1y text-blue-900'>
                    {item.title}
                  </p>
                  <p className='text-indigo-600 font-semibold'>${item.price}</p>
                  <p className='text-xs text-gray-500'>
                    Cantidad: <strong>{item.quantity}</strong>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {menuProducts.length > 0 && (
          <div className='p-4 border-t shadow-inner bg-gray-50'>
            <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold'>
              Finalizar compra
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
