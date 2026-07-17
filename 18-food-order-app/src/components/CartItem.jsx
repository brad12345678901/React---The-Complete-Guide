import { useContext } from "react";
import { StoreContext } from "../store/storeContext";

export default function CartItem({ item }) {
  const { addMealItem, removeMealItem } = useContext(StoreContext);
  return (
    <li className="cart-item">
      <p>{item.name}</p>
      <span className="cart-item-actions">
        <button onClick={() => removeMealItem(item)}>-</button>
        <p>{item.quantity}</p>
        <button onClick={() => addMealItem(item)}>+</button>
      </span>
    </li>
  );
}
