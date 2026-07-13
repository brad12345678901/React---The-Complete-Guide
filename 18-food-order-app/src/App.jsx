import { useEffect, useState } from "react";
import { useFetch } from "./hook/useFetch";
import { getMeals } from "./utils/api";

function App() {
  const { data: meals, setData: setMeals, isFetching } = useFetch(getMeals, []);
  return (
    <>
      <h1 id="main-header">TEST</h1>
      {isFetching && <p>Loading...</p>}
    </>
  );
}

export default App;
