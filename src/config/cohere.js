import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetCategory(props){
    const options = {
        method: 'POST',
        url: 'https://api.cohere.ai/v1/generate',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer yOle6J3A5BHkXpIbS0AWrxnS8E4mPQisFcY6l792'
        },
        data: {
          model: 'command',
          prompt: 'spending categories = [entertainment, clothing, food, education, miscellaneous, housing, utilities]\nWhat category from spending categories would' + props.item + 'belong to?\nRespond in one word must be from the spending categories list.',
          max_tokens: 4,
          temperature: 0.0,
          k: 0,
          stop_sequences: [],
        }
      };
    
    const [posts, setPosts] = useState([]);
    
    const fetchPost = async () => {
      await axios
      .request(options)
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
      })
      // function (response) {
      //     console.log(response.data);
      //     data = response.data.generations[0].text;
      // })
      .catch(error => {
        console.error(error);
      });
      // function (error) {
      //   console.log(error);
      //   data = error.message
      // });
      // console.log(data)
    }

    useEffect(() => {
      fetchPost();
    }, [])

    console.log(posts);
    return (
      <ul>
      {posts.map(post => (
        <li key={post.id}>{post.generations[0].text}</li>
      ))}
        <li>69</li>
    </ul>
  );
}

export default GetCategory;