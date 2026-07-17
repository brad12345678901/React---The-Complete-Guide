import { useContext, useRef } from "react";
import { StoreContext } from "../store/storeContext";
import CartModal from "./CartModal";
import logo from "../assets/logo.jpg";

export default function Header() {
  const modalRef = useRef();
  const { state } = useContext(StoreContext);

  const itemsCount =
    state.mealItems.length !== 0
      ? state.mealItems.reduce(
          (result, currentItem) => currentItem.quantity + result,
          0,
        )
      : 0;

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
          Cart ({itemsCount})
        </button>
      </div>
    </>
  );
}
