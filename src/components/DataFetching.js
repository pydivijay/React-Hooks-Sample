import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromClick] = useState(1);
  const handleClick = () => {
    setIdFromClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        FetchData
      </button>
      <div>{posts.title}</div>
      {/* {posts &&
        posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
    </div>
  );
}

export default DataFetching;
