import { useState, useEffect } from 'react'

//easier way to make api call
const useFetch = (url, options) => {

    //setters for return variables
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [thisOptions, setOptions] = useState(options); 

    //preform the api call
    useEffect(() => {
        console.log("fetching...")
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url, options)
                const result = await response.json()
                if (response.ok) {
                    setData(result)
                } else{
                    setHasError(true)
                    setData("Sample Category")
                    setErrorMessage(result)
                }
                setIsLoading(false)
            } catch (err) {
                console.log(err)
                setHasError(true)
                setErrorMessage(err.message)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [thisOptions])

    const updateOptions = (options) => {
        try{
            setOptions(options)
        }catch(e){
            console.log(e)
        }
    }

    return { data, isLoading, hasError, errorMessage, updateOptions}
}

export default useFetch 