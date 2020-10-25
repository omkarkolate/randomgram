import React, { useState } from "react";
import "./SideSection.css";

function FollowUserCard(props) {
  const [isfollow, setFollow] = useState(false);

  function handleFollow() {
    if (isfollow) {
      setFollow(false);
    } else {
      setFollow(true);
    }
  }
  return (
    <li>
      <div className="follow-user-card">
        <img alt="follow user" src={props.avatar} />
        <div>
          <p className="username">{props.username}</p>
          <p className="follow-user-info">Follows you</p>
        </div>
      </div>
      <div>
        <button className="follow-button" onClick={handleFollow}>
          {isfollow ? "Unfollow" : "Follow"}
        </button>
      </div>
    </li>
  );
}

export default FollowUserCard;
