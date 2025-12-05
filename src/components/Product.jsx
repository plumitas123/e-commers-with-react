import { useGetData } from "../hooks/useGetData"

export function Product() {

    const { data } = useGetData({ url: "https://fakestoreapi.com/products"})

    return (
        <>
         {data && data.map(product => (
            <div key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </div>
        ))}
        </>
    )
}