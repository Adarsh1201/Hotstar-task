import React from "react";
import "./Header.css";
import  logo1 from "./image/disney-hotstar-logo-dark.svg";
import  logo2 from "./image/disney-kids.svg";
import { Input } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left">
          <i class="fas fa-align-justify"></i>
          <img
            src={logo1}
            alt=""
          />
          <span>TV</span>
          <span>Movies</span>
          <span>Sports</span>
          <span>News</span>
          <span>Premium</span>
          <span>Disney+</span>
          <img
            src={logo2}
            alt=""
            className="kids"
          />
        </div>

        <div className="header-right">
          <Input className="search" placeholder="Search" />
          <i class="fas fa-search"></i>
          <button>SUBSCRIBE</button>
          <span>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
