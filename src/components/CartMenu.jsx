import { IoIosClose } from "react-icons/io";
import { useCounterStore } from "../stores/useCounterStore";

export function CartMenu ({ isShowMenu, setIsShowMenu }) {
    const menuProducts = useCounterStore((state) => state.menuProducts) 

    return (
        <section className="absolute z-100 backdrop-blur-md w-full h-full">
            <div className="flex items-center justify-center h-full">
                <IoIosClose size={30} onClick={() => (
                    setIsShowMenu(!isShowMenu)
                )} />
                <div>
                    {menuProducts.map((item) => (
                        <p key={item.id}>${item.price} - {item.title}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}