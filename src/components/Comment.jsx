import React from "react";

export default function Comment({ comment }) {
    return (
        <div className="my-2 p-4 border-b-2 border-b-gray-200">
            <p>{comment.message}</p>
            <p className="text-sm text-gray-400">Commented By: {comment.creator}</p>
        </div>
    )
}
