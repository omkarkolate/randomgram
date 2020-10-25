import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Comment from "./Comment";
import "./Post.css";

function random() {
  return Math.floor(Math.random() * 100);
}

function Post(props) {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(random());
  const [comments, setComments] = useState([]);
  const [InputComment, setInputComment] = useState("");

  function handleLike() {
    if (isLike) {
      setIsLike(false);
      setLikeCount(likeCount - 1);
    } else {
      setIsLike(true);
      setLikeCount(likeCount + 1);
    }
  }

  function addComment() {
    if (InputComment) {
      setComments([...comments, InputComment]);
      setInputComment("");
    }
  }

  function handleChange(event) {
    setInputComment(event.target.value);
  }

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-left">
          <Avatar src={props.avatar} />
          <h4>{props.username}</h4>
        </div>
        <div className="post-header-right">
          <MoreHorizOutlinedIcon />
        </div>
      </div>
      <div className="post-image" onDoubleClick={handleLike}>
        <img src={props.postImage} alt="Loading..." />
      </div>
      <div className="post-footer">
        <div className="post-action-icons">
          <div className="post-action-icons-left">
            <button onClick={handleLike}>
              {isLike ? (
                <FavoriteIcon className="post-action-icon like" />
              ) : (
                <FavoriteBorderOutlinedIcon className="post-action-icon" />
              )}
            </button>
            <ModeCommentOutlinedIcon className="post-action-icon" />
            <SendOutlinedIcon className="post-action-icon" />
          </div>
          <div className="post-action-icons-right">
            <BookmarkBorderOutlinedIcon className="post-action-icon" />
          </div>
        </div>
        <div className="post-like-count">
          <span>{likeCount} likes</span>
        </div>
        <div className="post-caption">
          <span>
            <span className="username">{props.username}</span> No need of
            caption picture says it all.
          </span>
        </div>
        <div className="post-comments-section">
          <span>
            {comments.length > 1
              ? `${comments.length} comments`
              : `${comments.length} comment`}
          </span>
          <div className="post-comments">
            <ul>
              {comments.map((comment, index) => {
                return (
                  <Comment
                    key={`${props.id}comment${index}`}
                    commentText={comment}
                    logInUser={props.logInUser}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="post-upload-time">
          <span>Just Now</span>
        </div>
        <div className="post-add-comment">
          <input
            type="text"
            value={InputComment}
            onChange={handleChange}
            placeholder="Add a comment..."
          />
          <button onClick={addComment}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
