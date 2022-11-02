import React, { useState, useEffect } from "react";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";

import "./App.css";

export default function App() {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch("/UserResponse")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="m-5 w-full">
        <h1 className="text-3xl font-bold">Cloud Computing Comments</h1>
        <div className="">
          <CommentForm comments={comments} setComments={(comment) => { setComments(comment) }} />
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
}
