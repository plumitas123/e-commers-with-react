import { TiShoppingCart } from "react-icons/ti";
import { useCounterStore } from "../stores/useCounterStore";
import { useState } from "react";
import { CartMenu } from "./CartMenu";

export function Card() {
  const { count } = useCounterStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className="
          fixed bottom-6 right-6 bg-indigo-600 text-white w-14 h-14 
          rounded-full flex items-center justify-center shadow-xl 
          cursor-pointer hover:bg-indigo-700 transition
        "
        onClick={() => setIsMenuOpen(true)}
      >
        <div className="relative">
          <TiShoppingCart size={32} />

          {/* Badge del contador */}
          {count > 0 && (
            <span
              className="
                absolute -top-2 -right-2 bg-red-500 text-white text-xs 
                w-5 h-5 flex items-center justify-center rounded-full
              "
            >
              {count}
            </span>
          )}
        </div>
      </div>

      {/* Menú lateral del carrito */}
      <CartMenu 
        isShowMenu={isMenuOpen} 
        setIsShowMenu={setIsMenuOpen} 
      />
    </>
  );
}
