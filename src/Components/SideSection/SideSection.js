import React from "react";
import Avatar from "@material-ui/core/Avatar";
import FolloeUserCard from "./FollowUserCard";
import "./SideSection.css";

function SideSection({ users }) {
  // console.log(
  //   users.length ? users[0].picture.thumbnail : "https://bit.ly/356Zw2v"
  // );

  return (
    <section className="side-section">
      <div className="user-card">
        <Avatar
          alt={users.length ? users[0].login.username : "user_name"}
          src={users.length ? users[0].picture.thumbnail : ""}
        />
        <div>
          <p className="username">
            {users.length ? users[0].login.username : "user_name"}
          </p>
          <p className="color-gray">
            {users.length
              ? `${users[0].name.first} ${users[0].name.last}`
              : "User Name"}
          </p>
        </div>
      </div>

      <div className="suggestions">
        <div className="heading">
          <div className="color-gray">
            <b>Suggestions For You</b>
          </div>
          <div>
            <b>See All</b>
          </div>
        </div>
        <ul>
          {users.slice(1).map((user, index) => {
            return (
              <FolloeUserCard
                key={`followUser${index}`}
                avatar={user.picture.thumbnail}
                username={user.login.username}
              />
            );
          })}
        </ul>
      </div>

      <div className="footer-info">
        <div className="links">
          <p>About . Help . Press . API . Jobs . PrivacyTerms</p>
          <p>Locations . Top Accounts . Hashtags . Language</p>
        </div>
        <p className="copyright">© 2020 INSTAGRAM FROM FACEBOOK</p>
      </div>
    </section>
  );
}

export default SideSection;
