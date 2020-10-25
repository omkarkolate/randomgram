import React from "react";
import "./Main.css";
import Story from "../Story/Story";
import Post from "../Post/Post";
import SideSection from "../SideSection/SideSection";

function Main({ users }) {
  return (
    <main>
      <div className="main-container">
        <section className="feed">
          {/* Stories */}
          <section className="story-section">
            {users.slice(0, users.length - 6).map((user, index) => {
              return (
                <Story
                  key={`story${index}`}
                  avatar={user.picture.thumbnail}
                  username={user.login.username}
                />
              );
            })}
          </section>
          {/*Posts */}
          {users.slice(0, users.length - 6).map((user, index) => {
            return (
              <Post
                key={`post${index}`}
                id={`post${index}`}
                avatar={user.picture.thumbnail}
                username={user.login.username}
                postImage={`https://picsum.photos/700/500?random=${index}`}
                logInUser={users[users.length - 6].login.username}
              />
            );
          })}
        </section>
        <aside>
          <SideSection users={users.slice(users.length - 6)} />
        </aside>
      </div>
    </main>
  );
}

export default Main;
