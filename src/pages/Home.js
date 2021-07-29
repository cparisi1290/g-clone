import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-headerLeft"></div>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        <div className="home-headerRight"></div>
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <AppsIcon />
        <Avatar />
      </div>
      <div className="home-body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
      </div>
      <div className="home-inputContainer">
        <Search />
      </div>
    </div>
  );
}

export default Home;
