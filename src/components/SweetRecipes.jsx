import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { recipes } from "./data/db.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SweetRecipes = () => {
  return (
    <>
      <Header />
      <div className="recipes-list">
        {recipes
          .filter((recipe) => recipe.type === "sweet")
          .map((recipe) => {
            return (
              <div className="card-data" key={recipe.id}>
                <div className="card-badge">
                  <FontAwesomeIcon icon={faClock} />
                  {recipe.cooking_time} min
                </div>
                <Link to={`/recipes/${recipe.id}`}>
                  <img src={recipe.image_url} className="card--image" />
                  <p className="recipe-title">{recipe.title}</p>
                  <div className="card--stats"></div>
                </Link>
              </div>
            );
          })}
      </div>

      <Footer />
    </>
  );
};

export default SweetRecipes;
