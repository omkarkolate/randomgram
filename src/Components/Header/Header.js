import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";

function Header({ logInUser }) {
  // console.log(logInUser ? console.log(logInUser.picture.thumbnail) : "");

  return (
    <header>
      <div className="header-container">
        <div className="mobile-view">
          <CameraAltOutlinedIcon />
        </div>
        {/* Logo */}
        <div className="logo">
          <h1>Randomgram</h1>
        </div>
        <div className="mobile-view">
          <SendOutlinedIcon />
        </div>

        {/*Search  */}
        <div className="search">
          <span>
            <SearchIcon />
          </span>
          <input type="search" placeholder="Search" />
        </div>

        <div className="menu">
          {/* Navbar */}
          <div className="nav">
            <nav>
              <HomeIcon className="menu-icon" />
              <div className="mobile-view">
                <SearchIcon className="menu-icon" />
              </div>
              <div className="mobile-view">
                <AddBoxOutlinedIcon className="menu-icon" />
              </div>
              <div className="desktop-view">
                <SendOutlinedIcon className="menu-icon" />
              </div>
              <div className="desktop-view">
                <ExploreOutlinedIcon className="menu-icon" />
              </div>
              <FavoriteBorderOutlinedIcon className="menu-icon" />
            </nav>
          </div>

          {/* Avatar */}
          <div className="avatar">
            <Avatar
              alt={logInUser ? logInUser.login.username : ""}
              src={logInUser ? logInUser.picture.thumbnail : ""}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
// https://bit.ly/356Zw2v
