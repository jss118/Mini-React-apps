import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__div">
      <h1 className="header__h1">Mini React Projects!</h1>
      <Link className="link__pages" to="Home">
        Home
      </Link>
      <Link className="link__pages" to="Counter">
        Counter
      </Link>
      <Link className="link__pages" to="Calculator">
        Calculator
      </Link>
      <Link className="link__pages" to="ToDoList">
        To-Do List
      </Link>
      <Link className="link__pages" to="JokeGenerator">
        Joke Generator
      </Link>
    </div>
  );
};

export default Header;
