import React, { createContext } from "react";
import { recipes } from "../components/data/db.json";
import { useState } from "react";

console.log(recipes);
export const AddFavoritesContext = createContext(null);

const getDefaultFavorite = () => {
  let favorite = {};
  for (let i = 0; i < recipes.length + 1; i++) {
    favorite[i] = 0;
  }
  return favorite;
};

export const AddFavoritesProvider = (props) => {
  const [favoriteItems, setFavoriteItems] = useState(getDefaultFavorite);

  const addToFavorites = (itemId) => {
    setFavoriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFavorites = (itemId) => {
    setFavoriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    favoriteItems,
    addToFavorites,
    removeFavorites,
  };

  console.log(favoriteItems);
  return (
    <AddFavoritesContext.Provider value={contextValue}>
      {props.children}
    </AddFavoritesContext.Provider>
  );
};
