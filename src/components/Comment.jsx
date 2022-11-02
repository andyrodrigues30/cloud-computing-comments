import React from "react";

export default function Comment({ comment }) {
    return (
        <div className="my-2 p-4 border-b-2 border-b-gray-200">
            <p className="whitespace-pre">{comment.UserResponse}</p>
            <p className="text-sm text-gray-400">Commented By: {comment.UserName}</p>
        </div>
    )
}
