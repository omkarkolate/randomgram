import React from "react";
import "./Story.css";

function Story(props) {
  return (
    <div className="story">
      <div>
        <img alt="story" src={props.avatar} />
      </div>
      <span>{props.username}</span>
    </div>
  );
}

export default Story;
