import { useState, useEffect } from 'react'

//easier way to make api call
const useFetch = (url, options) => {

    //setters for return variables
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    //preform the api call
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url, options)
                const result = await response.json()
                if (response.ok) {
                    setData(result)
                } else{
                    setHasError(true)
                    setErrorMessage(result)
                }
                setIsLoading(false)
            } catch (err) {
                setHasError(true)
                setErrorMessage(err.message)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    return { data, isLoading, hasError, errorMessage }
}

export default useFetch 