import React, { useState } from "react";

export default function CommentForm({ comments, setComments }) {

  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState("");


  const handleNameChange = (e) => { setName(e.target.value) };
  const handleNewCommentChange = (e) => { setNewComment(e.target.value) };


  const handleSubmit = () => {
    // TODO: write to database
    const newCommentData = { "message": newComment, "creator": name };

    let newCommentsList = []
    newCommentsList.push(...comments, newCommentData);

    // update comments array
    setComments(newCommentsList);
  }

    const submitResponse = () => {
      console.log(UserInput)
      axios.post("http://localhost:5000/UserResponse/add",{"UserResponse": newComment,"UserName": name})
      .then(res => console.log(res.data))
      .catch(err => console.log("Error: " + err))

      setUserInput("")
      // document.location.reload() 
  }      

  return (
    <div className="my-5 bg-[#FAFAFA] p-4 rounded">
      <div className="mb-2">
        <p>Name</p>
        <input
          value={name}
          onChange={(event) => handleNameChange(event)}
          className="w-full bg-[#ececec] p-2 rounded"
        />
      </div>

      <div className="mt-2">
        <p>Comment</p>
        <textarea
          value={newComment}
          onChange={(event) => handleNewCommentChange(event)}
          className="w-full bg-[#ececec] p-2 rounded"
        />
      </div>

      <button
        className="w-full bg-[#38ba50] mt-2 p-2 rounded"
        onClick={() => handleSubmit()}
      >Submit</button>
    </div>
  )
}
