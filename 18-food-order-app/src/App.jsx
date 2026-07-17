import { useEffect, useState, use, useRef } from "react";
import logo from "./assets/logo.jpg";
import CartModal from "./components/CartModal";
import Meal from "./components/Meal";

function App() {
  const modalRef = useRef(null);

  function openCart() {
    modalRef.current.showModal();
  }

  return (
    <>
      <CartModal ref={modalRef} />
      <div id="main-header">
        <h1 id="title">
          <img src={logo}></img>Food App
        </h1>
        <button className="text-button" onClick={openCart}>
          Cart (0)
        </button>
      </div>
      <Meal />
    </>
  );
}

export default App;
