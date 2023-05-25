import { useParams } from "react-router-dom";
import { AddFavoritesContext } from "../context/addFavorite-context";
import useFetch from "./UseFetch";
import { recipes } from "./data/db.json";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Tab from "./Tab";
import Footer from "./Footer";
import { useContext } from "react";

const RecipeDetails = () => {
  const { addToFavorites } = useContext(AddFavoritesContext);
  const { id } = useParams();

  const { data: recipe } = useFetch(recipes + id);

  const tabs = [
    {
      title: "Sastojci",
      content: (
        <div>
          {recipes[id].ingredients.map((i) => (
            <li className="p-2">{i}</li>
          ))}
        </div>
      ),
    },
    {
      title: "Priprema",
      content: <div>{recipes[id].how_to_make}</div>,
    },
  ];

  return (
    <>
      <Header />
      <div className="recipe-details">
        {recipe && (
          <>
            <img
              src={recipe[id].image_url}
              className="card--image rounded-top rounded-bottom shadow-lg"
            />
            <div className="container recipe-details--title">
              <h2>{recipe[id].title}</h2>

              <FontAwesomeIcon
                icon={faHeart}
                beat
                className="recipe-details--icon"
                style={{ color: "#5a3b8b" }}
                onClick={() => addToFavorites(id)}
              />
            </div>
            <div>
              <Tab tabs={tabs} defaultActiveTab={0} recipes={recipes} />
            </div>
            <div className="more-recipe-details">
              <p>Vrijeme Pripreme: {recipe[id].cooking_time} min</p>
              <p>Serviranje za: {recipe[id].servings}</p>
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default RecipeDetails;
