import React from "react";

export default function Comment(props) {
  return (
    <li>
      <span className="username">{props.logInUser}</span>
      <span className="comment">{props.commentText}</span>
    </li>
  );
}
