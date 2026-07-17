import { use } from "react";
import { StoreContext } from "../store/storeContext";

export default function CartModal({ ref }) {
  function closeModal() {
    ref.current.close();
  }
  return (
    <dialog ref={ref} className="modal cart">
      <h2>Your Cart</h2>
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
}
