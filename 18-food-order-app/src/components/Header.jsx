import { useContext, useRef } from "react";
import { StoreContext } from "../store/storeContext";
import logo from "../assets/logo.jpg";
import Modal from "./Modal";
import Button from "./Button";
import Cart from "./Cart";

export default function Header() {
  const modalCartRef = useRef();
  const { state } = useContext(StoreContext);

  const itemsCount =
    state.mealItems.length !== 0
      ? state.mealItems.reduce(
          (result, currentItem) => currentItem.quantity + result,
          0,
        )
      : 0;

  function openCart() {
    modalCartRef.current.showModal();
  }

  function closeCart() {
    modalCartRef.current.close();
  }
  return (
    <>
      <Modal ref={modalCartRef}>
        <Cart close={closeCart} />
      </Modal>
      <div id="main-header">
        <h1 id="title">
          <img src={logo}></img>Food App
        </h1>
        <button className="text-button" onClick={openCart}>
          Cart ({itemsCount})
        </button>
      </div>
    </>
  );
}
