import { useContext, useRef } from "react";
import { StoreContext } from "../store/storeContext";
import logo from "../assets/logo.jpg";
import Modal from "./Modal";
import Button from "./Button";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function Header() {
  const modalRef = useRef();
  const { state, dispatch } = useContext(StoreContext);

  const itemsCount =
    state.mealItems.length !== 0
      ? state.mealItems.reduce(
          (result, currentItem) => currentItem.quantity + result,
          0,
        )
      : 0;

  function openModal() {
    modalRef.current.showModal();
  }

  function closeModal() {
    modalRef.current.close();
  }

  function resetModalProgression() {
    dispatch({ type: "RESET_MODAL_PROGRESS" });
  }

  return (
    <>
      <Modal
        key={`CartModal:${state.modalCartProgression}`}
        ref={modalRef}
        open={openModal}
        progress={state.modalCartProgression}
        resetAction={resetModalProgression}
      >
        {state.modalCartProgression === 0 && (
          <Cart close={closeModal} open={openModal} />
        )}
        {state.modalCartProgression === 1 && <Checkout close={closeModal} />}
      </Modal>
      <div id="main-header">
        <h1 id="title">
          <img src={logo}></img>Food App
        </h1>
        <button className="text-button" onClick={openModal}>
          Cart ({itemsCount})
        </button>
      </div>
    </>
  );
}
