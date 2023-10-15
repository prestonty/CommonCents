import useFetch from './useFetch'

const useCategory = (item) => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer yOle6J3A5BHkXpIbS0AWrxnS8E4mPQisFcY6l792'
      },
      body: JSON.stringify({
        model: 'command',
        prompt: 'spending categories = [entertainment, clothing, food, education, miscellaneous, housing, utilities]\nWhat category from spending categories would' + item + 'belong to?\nRespond in one word must be from the spending categories list.',
        max_tokens: 4,
        temperature: 0.9,
        k: 0,
        stop_sequences: []
      })
    };

    const url = 'https://api.cohere.ai/v1/generate'

    const {data, isLoading, hasError, errorMessage} = useFetch(url, options)

    return data ? data.generations[0].text : 'bad'
}

export default useCategory