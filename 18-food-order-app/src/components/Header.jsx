import { useContext, useRef } from "react";
import { StoreContext } from "../store/storeContext";
import CartModal from "./CartModal";
import logo from "../assets/logo.jpg";

export default function Header() {
    const modalRef = useRef();
    const {state} = useContext(StoreContext);

    function openCart () {
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
          Cart ({state.mealItemsCount})
        </button>
      </div>
    </>
  );
}
