import { TiShoppingCart } from "react-icons/ti";
import { useCounterStore } from "../stores/useCounterStore";

export function Card () {

    const { count } = useCounterStore();

    return (
        <div className="flex items-center justify-center gap-3">
           <TiShoppingCart size={30} /> 
           <strong className="text-2xl">{count}</strong>
        </div>
    )
}