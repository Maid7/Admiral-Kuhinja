import Header from "./Header";
import Footer from "./Footer";
import { recipes } from "../components/data/db.json";
import { AddFavoritesContext } from "../context/addFavorite-context";
import { useContext } from "react";
import FavoriteItem from "./FavoriteItem";
import { motion } from "framer-motion";

const Favorites = () => {
  const { favoriteItems } = useContext(AddFavoritesContext);
  return (
    <>
      <Header />
      <div className="recipes-list">
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
          Vasi omiljeni recepti
        </motion.h4>
        {recipes.map((recipe) => {
          if (favoriteItems[recipe.id] !== 0) {
            return <FavoriteItem data={recipe} />;
          }
        })}
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
