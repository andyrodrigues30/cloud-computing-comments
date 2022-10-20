import React from "react";
import Comment from "./Comment";

export default function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />
      })}
    </div>
  )
}
