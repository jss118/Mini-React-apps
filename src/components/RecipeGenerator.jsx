import React, { useState, useEffect } from "react";
import Axios from "axios";

const RecipeGenerator = () => {
  const [recipeCategories, setRecipeCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    recipeCategories.length > 0 &&
      setIsLoading(boo => {
        return !boo;
      }); // todo: set isLoading to turn false
  }, [recipeCategories]);

  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  Axios.request(options)
    .then(function (response) {
      setRecipeCategories(() => {
        return response.data.results.filter(categories => categories.recipes);
      });
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <>
      {isLoading ? (
        <p>Loading categories...</p>
      ) : (
        <div className="recipe_div">
          {recipeCategories.map(category => {
            return (
              <div className="categoryCard">
                <h1>{category.name}</h1>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default RecipeGenerator;
