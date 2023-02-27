import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to={"/Home"} className="links">
          Home
        </Link>
        <Link to={"/Task"} className="links">
          Add Task
        </Link>
      </div>
    </header>
  );
};

export default Header;
