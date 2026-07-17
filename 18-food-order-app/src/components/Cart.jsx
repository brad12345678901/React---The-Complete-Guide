import { useContext } from "react";
import { StoreContext } from "../store/storeContext";
import CartItem from "./CartItem";
import Button from "./Button";

export default function Cart({ close }) {
  const { state } = useContext(StoreContext);
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {state.mealItems.length === 0 ? (
          <p>Get Some Meals</p>
        ) : (
          state.mealItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </ul>
      <div className="modal-actions">
        <Button onClick={close}>Close</Button>
      </div>
    </div>
  );
}
