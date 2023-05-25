import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import useFetch from "./UseFetch";
// import { recipes } from "./data/db.json";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const HomePage = () => {
  const { data, isPending } = useFetch();

  return (
    <>
      <motion.div
        className="categories container"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{
          delay: 1,
          ease: "easeOut",
          type: "spring",
          stiffness: 10,
        }}
      ></motion.div>
      <motion.div className=" recipes-list" initial>
        {data &&
          data.map((recipe) => {
            return (
              <>
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
              </>
            );
          })}
      </motion.div>
      <Footer />
    </>
  );
};

export default HomePage;
