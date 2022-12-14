import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__div">
      <h1 className="header__h1">Mini React Projects!</h1>
      <div className="linksContainer">
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
        <Link className="link__pages" to="RockPaperScissors">
          R.P.S
        </Link>
        <Link className="link__pages" to="HexColours">
          Hex Colours
        </Link>
        <Link className="link__pages" to="WeatherApp">
          Weather App
        </Link>
        <Link className="link__pages" to="TicTacToe">
          T.T.T
        </Link>
        <Link className="link__pages" to="Dice">
          Dice Roll
        </Link>
        <Link className="link__pages" to="WouldYouRather">
          W.Y.R?
        </Link>
        <Link className="link__pages" to="RecipeGenerator">
          Recipes
        </Link>
      </div>
    </div>
  );
};

export default Header;
