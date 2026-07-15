import { usdFormatter } from "../utils/formatter";

export default function MealItem({ item }) {
  
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
          <button className="button">Add to Cart</button>
        </div>
      </article>
    </div>
  );
}
