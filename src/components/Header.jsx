import React from "react";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsMenu } from "../utils/headerSlice";
import { Link } from "react-router-dom";

const Header = () => {

  const dispatch = useDispatch();

  const handleSideBar = () => {
    dispatch(toggleIsMenu());
  };
  return (
    <div className="header">
      <div className="header-left">
        <img
          onClick={handleSideBar}
          className="menu-logo"
          src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
          alt=""
        />
        <Link to={"/"}>
          {" "}
          <img
            className="yt-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt=""
          />
        </Link>
      </div>
      <SearchBar />
      <div className="header-right">
        <img
          src="https://www.citypng.com/public/uploads/preview/free-notifications-bell-outline-icon-png-701751694974381h7wblk6fpx.png"
          alt=""
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt=""
        />
      </div>
      
    </div>
  );
};

export default Header;
