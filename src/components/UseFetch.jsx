import { useEffect, useState } from "react";
import { recipes } from "./data/db.json";

const useFetch = (url) => {
  const [data, setData] = useState(recipes);

  useEffect(() => {
    fetch(recipes)
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [url]);

  return { data };
};

export default useFetch;
