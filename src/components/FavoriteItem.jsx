import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FavoriteItem = (props) => {
  const { id, cooking_time, image_url, title } = props.data;

  return (
    <div className="recipes-list">
      <div className="card-data">
        <div className="card-badge">
          <FontAwesomeIcon icon={faClock} />
          {cooking_time} min
        </div>
        <Link to={`/recipes/${id}`}>
          <img src={image_url} className="card--image" />
          <p className="recipe-title">{title}</p>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteItem;
