import { IoIosClose } from "react-icons/io";

export function CartMenu ({ isShowMenu, setIsShowMenu }) {
    return (
        <section className="absolute z-100 backdrop-blur-md w-full h-full">
            <div className="flex items-center justify-center h-full">
                <IoIosClose size={30} onClick={() => (
                    setIsShowMenu(!isShowMenu)
                )} />
            </div>
        </section>
    )
}