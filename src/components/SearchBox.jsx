import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const linkStyle = {
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  color: "black",
};

const SearchBox = ({ data }) => {
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
        className="search-box container"
      >
        <input
          type="text"
          placeholder="Trazi recept..."
          onChange={handleFilter}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "darkblue" }}
        />
      </motion.div>
      {filterData.length != 0 && (
        <div className="data-results">
          {filterData.map((value, key) => {
            return (
              <Link
                to={`/recipes/${value.id}`}
                style={linkStyle}
                key={value.id}
              >
                <p className="data-item">{value.title}</p>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchBox;
