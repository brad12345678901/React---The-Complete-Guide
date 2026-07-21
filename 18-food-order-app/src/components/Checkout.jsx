import { useContext } from "react";
import Button from "./Button";
import { StoreContext } from "../store/storeContext";
import Input from "./Input";
import { usdFormatter } from "../utils/formatter";
import { useActionState } from "react";
import { addMealOrder, testFunction } from "../utils/api";
import { hasAlphabets, isEmail, isEmpty } from "../utils/validator";

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

    const errors = {};

    if (!isEmail(email) && isEmpty(email)) {
      errors.email = "Not a valid email";
    }

    if (isEmpty(fullName)) {
      errors.fullName = "Full name should not be empty";
    }

    if (isEmpty(street)) {
      errors.street = "Street should not be empty";
    }

    if (isEmpty(city)) {
      errors.city = "City should not be empty";
    }

    if (hasAlphabets(postalCode) || isEmpty(postalCode)) {
      errors.postalCode = "It must be number only / Not empty";
    }

    if (Object.keys(errors).length) {
      return {
        defaultValues: {
          fullName,
          email,
          street,
          postalCode,
          city,
        },
        errors: errors,
      };
    }

    const orderData = {
      customer: {
        name: fullName,
        email: email,
        street: street,
        ["postal-code"]: postalCode,
        city: city,
      },
      items: state.mealItems,
    };

    const result = await addMealOrder(controller.current.signal, orderData);

    if (result.success) {
      dispatch({ type: "PROGRESS_MODAL" });
      dispatch({ type: "RESET_MEAL_ITEMS" });
    }

    return {
      defaultValues: {},
      errors: null,
    };
  }

  const [formState, formAction] = useActionState(handleAction, {
    defaultValues: {},
    errors: null,
  });

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Amount: {usdFormatter.format(total)}</p>
      <form action={formAction}>
        <Input
          label="Full Name"
          id="full-name"
          name="full-name"
          error={formState.errors?.fullName}
          defaultValue={formState.defaultValues?.fullName}
        />
        <Input
          label="Email Address"
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          error={formState.errors?.email}
          defaultValue={formState.defaultValues?.email}
        />
        <Input
          label="Street"
          id="street"
          name="street"
          error={formState.errors?.street}
          defaultValue={formState.defaultValues?.street}
        />
        <div className="control-row">
          <Input
            label="Postal Code"
            id="postal-code"
            name="postal-code"
            autoComplete="off"
            error={formState.errors?.postalCode}
            defaultValue={formState.defaultValues?.postalCode}
          />
          <Input
            label="City"
            id="city"
            name="city"
            error={formState.errors?.city}
            defaultValue={formState.defaultValues?.city}
          />
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
