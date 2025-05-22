import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenu = useSelector((store) => store.header.isMenu);

  return (
    <div className="side-bar flex" style={{ width: isMenu ? "200px" : "70px" }}>
      <Link to={'/'}>
       
        <div className="side-home flex curser" style={{flexDirection:isMenu? 'row' : 'column'}}>
          <img
            src="https://static.thenounproject.com/png/3574480-200.png"
            alt=""
          />
          <div className="flex" style={{ fontSize: isMenu ? "1rem" : "0.7rem" }}>
            Home
          </div>
        </div>
      </Link>
      <div className="side-Shorts flex curser" style={{flexDirection:isMenu? 'row' : 'column'}}>
        <img
          src="https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg"
          alt=""
        />
        <div className="flex" style={{ fontSize: isMenu ? "1rem" : "0.7rem" }}>
          Shorts
        </div>
      </div>
      <div className="side-Subscriptions flex curser" style={{flexDirection:isMenu? 'row' : 'column'}}>
        <img
          src="https://static.thenounproject.com/png/456182-200.png"
          alt=""
        />
        <div className="flex" style={{ fontSize: isMenu ? "1rem" : "0.7rem" }}>
          Subscriptions
        </div>
      </div>
      <div className="side-You flex curser" style={{flexDirection:isMenu? 'row' : 'column'}}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
          alt=""
        />
        <div className="flex" style={{ fontSize: isMenu ? "1rem" : "0.7rem" }}>
          You
        </div>
      </div>
    </div>
  );
};

export default SideBar;
