import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__div">
      <h1 className="header__h1">Mini React Projects!</h1>
      <Link className="link__home" to="Home">
        Home
      </Link>
      <Link className="link__counter" to="Counter">
        Counter
      </Link>
      <Link className="link__calculator" to="Calculator">
        Calculator
      </Link>
      <Link className="link__to-do-list" to="ToDoList">
        To-Do List
      </Link>
    </div>
  );
};

export default Header;
