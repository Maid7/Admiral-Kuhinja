import React from "react";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import RecipeDetails from "./components/RecipeDetails";
import { recipes } from "./components/data/db.json";
import Favorites from "./components/Favorites";
import SweetRecipes from "./components/SweetRecipes";
import SavoryRecipes from "./components/SavoryRecipes";
import { AddFavoritesProvider } from "./context/addFavorite-context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        path="/homepage"
        element={
          <>
            <Header />
            <SearchBox data={recipes} />
            <HomePage />
          </>
        }
      ></Route>
      <Route path="/" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/sweet-recipes" element={<SweetRecipes data={recipes} />} />
      <Route
        path="/savory-recipes"
        element={<SavoryRecipes data={recipes} />}
      />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Route>
  )
);

function App() {
  return (
    <AddFavoritesProvider>
      <RouterProvider router={router} />
    </AddFavoritesProvider>
  );
}

export default App;
