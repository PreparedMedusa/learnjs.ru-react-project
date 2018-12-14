import React from "react";

export default function Comment(arg) {
  const comment = arg.comment;
  return (
    <div>
      <p>
        {comment.text} <b>by {comment.user}</b>
      </p>
    </div>
  );
}
