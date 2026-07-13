import { useEffect, useState } from "react";
import { useFetch } from "./hook/useFetch";
import { getMeals } from "./utils/api";
import logo from "./assets/logo.jpg";
import Meal from "./components/Meal";

function App() {
  const { data: meals, setData: setMeals, isFetching } = useFetch(getMeals, []);
  return (
    <>
      <div id="main-header">
        <h1 id="title">
          <img src={logo}></img>Food App
        </h1>
        <button className="text-button">Cart (0)</button>
      </div>
      <div id="meals">
        {meals.length !== 0 && meals.map((item) => <Meal item={item} />)}
      </div>
    </>
  );
}

export default App;
