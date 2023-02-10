import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response);
        setError("");
      })
      .error((error) => {
        setLoading(false);
        setPost({});
        setError(error);
      });
  }, []);
  return (
    <div>
      {loading ? "Lodaing" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
