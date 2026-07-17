import { useContext } from "react";
import Button from "./Button";
import { StoreContext } from "../store/storeContext";

export default function Checkout({close}) {
  return (
    <div>
      <h2>Checkout</h2>
      <form>

      </form>
      <div className="modal-actions">
        <Button onClick={close} textButton>Close</Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
}
