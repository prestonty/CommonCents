import useFetch from './useFetch';
import { useEffect, useState } from 'react';

const useCategory = (item) => {
  const [category, setcategory] = useState("bad_input");
  const [thisItem, setThisItem] = useState("myItem"); 
  

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer yOle6J3A5BHkXpIbS0AWrxnS8E4mPQisFcY6l792'
      },
      body: JSON.stringify({
        model: 'command',
        prompt: 'spending categories = [entertainment, clothing, food, education, miscellaneous, housing, utilities]\nWhat category from spending categories would' + thisItem + 'belong to?\nRespond in one word must be from the spending categories list.',
        max_tokens: 2,
        temperature: 0.2,
        k: 0,
        stop_sequences: []
      })
    };

    const url = 'https://api.cohere.ai/v1/generate'
    const {data, isLoading, hasError, errorMessage, updateOptions} = useFetch(url, options)
  
    const getcategory = () => {
      try{
        console.log(thisItem);
        updateOptions(options); //update fetch 
        setcategory(data);
      }catch(e)
      {console.log(e)}
    };

    const updateItem = (newItem) =>{ 
      setThisItem(newItem); //updates options 
    }

    // return data ? data.generations[0].text : 'bad'
    return [category , getcategory,updateItem]; 
}

export default useCategory