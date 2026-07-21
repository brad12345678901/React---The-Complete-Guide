import { useContext } from "react";
import Button from "./Button";
import { StoreContext } from "../store/storeContext";
import Input from "./Input";
import { usdFormatter } from "../utils/formatter";
import { useActionState } from "react";
import { testFunction } from "../utils/api";
import { hasAlphabets } from "../utils/validator";

export default function Checkout({ close, controller }) {
  const { state, dispatch } = useContext(StoreContext);
  const total = state.mealItems.reduce(
    (result, item) => result + item.price * item.quantity,
    0,
  );

  async function handleAction(prevState, formData) {
    const fullName = formData.get("full-name");
    const email = formData.get("email");
    const street = formData.get("street");
    const postalCode = formData.get("postal-code");
    const city = formData.get("city");

    const result = await testFunction(controller.current.signal);

    if (result.success)
      dispatch({ type: "PROGRESS_MODAL" });
  }

  const [formState, formAction] = useActionState(handleAction, {
    errors: null,
  });

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Amount: {usdFormatter.format(total)}</p>
      <form action={formAction}>
        <Input label="Full Name" id="full-name" name="full-name" />
        <Input
          label="Email Address"
          id="email"
          name="email"
          type="email"
          autoComplete="off"
        />
        <Input label="Street" id="street" name="street" />
        <div className="control-row">
          <Input
            label="Postal Code"
            id="postal-code"
            name="postal-code"
            autoComplete="off"
          />
          <Input label="City" id="city" name="city" />
        </div>
        <div className="modal-actions">
          <Button onClick={close} type="button" textButton fallbackText="Close">
            Close
          </Button>
          <Button type="submit" fallbackText="Submitting...">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
