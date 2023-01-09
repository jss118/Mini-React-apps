import React, { useState, useEffect } from "react";
import Axios from "axios";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: { from: "", size: "", tags: "" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

Axios.request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

const RecipeGenerator = () => {
  const [recipeList, setRecipeList] = useState("");

  return (
    <div className="recipe_div">
      <button className="recipe_gen-btn">Generate Recipe!</button>
    </div>
  );
};

export default RecipeGenerator;
