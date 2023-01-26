import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HookAxiosExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Todo:</h1>
      <p>{data.title}</p>
    </div>
  );
}

export default HookAxiosExample;
