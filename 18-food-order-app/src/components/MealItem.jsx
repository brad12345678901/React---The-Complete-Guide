import { useContext } from "react";
import { usdFormatter } from "../utils/formatter";
import { StoreContext } from "../store/storeContext";

export default function MealItem({ item }) {
  const { state, dispatch, addMealItem } = useContext(StoreContext);

  
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${item.image}`} />
        <h3>{item.name}</h3>
        <div>
          <p className="meal-item-price">{usdFormatter.format(item.price)}</p>
          <div className="meal-item-description">{item.description}</div>
        </div>
        <div className="meal-item-actions">
          <button className="button" onClick={() => addMealItem(item)}>
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
}
