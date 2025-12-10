import { fetchData } from "../services/DataFetch"
import { useEffect, useState } from "react"

export function useGetData({ url }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData({ url })
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [url])

    return { data, loading, error }
}