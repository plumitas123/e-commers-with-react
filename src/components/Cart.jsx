import { TiShoppingCart } from 'react-icons/ti'
import { useCounterStore } from '../stores/useCounterStore'
import { useState } from 'react'
import { CartMenu } from './CartMenu'

export function Card () {
  const { count } = useCounterStore()
  const [isShowCart, setIsShowCart] = useState(true)

  const handelClick = () => {
    setIsShowCart(!isShowCart)
    console.log(isShowCart)
  }

  return isShowCart ? (
    <div className='flex items-center justify-center gap-3'>
      <div>
        <TiShoppingCart size={30} onClick={handelClick} />
      </div>
      <strong className='text-2xl'>{count}</strong>
    </div>
  ) : (
    <CartMenu isShowMenu={isShowCart} setIsShowMenu={setIsShowCart} />
  )
}
