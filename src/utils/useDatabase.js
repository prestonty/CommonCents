import { useState, useEffect } from 'react'
import { db } from '../config/firebase.js'

const useDataBase = (item) => {
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const putData = async () => {
            setIsLoading(true)
            try {
                const docRef = await addDoc(collection(db, "SpendingItems"), {item});
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                setHasError(true)
                setErrorMessage(e)
                setIsLoading(false)
                console.error("Error adding document: ", e);
            }
              
        }
        putData()
        setIsLoading(false)
    }, [])

    return {isLoading, hasError, errorMessage}
}

export default useDataBase