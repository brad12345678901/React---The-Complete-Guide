import { useContext } from "react";
import Button from "./Button";
import { StoreContext } from "../store/storeContext";
import Input from "./Input";
import { usdFormatter } from "../utils/formatter";

export default function Checkout({ close }) {
  const { state } = useContext(StoreContext);
  const total = state.mealItems.reduce(
    (result, item) => result + item.price * item.quantity,
    0,
  );
  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Amount: {usdFormatter.format(total)}</p>
      <form>
        <Input label="Full Name" id="full-name" />
        <Input
          label="Email Address"
          id="email"
          type="email"
          autoComplete="off"
        />
        <Input label="Street" id="street" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" autoComplete="off" />
          <Input label="City" id="city" />
        </div>
      </form>
      <div className="modal-actions">
        <Button onClick={close} textButton>
          Close
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </div>
  );
}
