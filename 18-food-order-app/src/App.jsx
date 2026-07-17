import { useEffect, useState, use, useRef, useContext } from "react";
import Meal from "./components/Meal";
import { StoreContext } from "./store/storeContext";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Meal />
    </>
  );
}

export default App;
