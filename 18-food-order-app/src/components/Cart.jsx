import { useContext } from "react";
import { StoreContext } from "../store/storeContext";
import CartItem from "./CartItem";
import Button from "./Button";
import { usdFormatter } from "../utils/formatter";

export default function Cart({ close, open }) {
  const { state, dispatch } = useContext(StoreContext);

  const total = state.mealItems.reduce(
    (result, item) => result + item.price * item.quantity,
    0,
  );

  function checkout() {
    dispatch({ type: "PROGRESS_MODAL" });
  }

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
      <p className="cart-total">{usdFormatter.format(total)}</p>
      <div className="modal-actions">
        <Button onClick={close} textButton>
          Close
        </Button>
        <Button onClick={checkout}>Checkout</Button>
      </div>
    </div>
  );
}
