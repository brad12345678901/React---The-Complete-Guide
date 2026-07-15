export default function Meal({ item }) {
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${item.image}`} />
        <h3>{item.name}</h3>
        <div className="meal-item-description">{item.description}</div>
        <div className="meal-item-actions">
          <button className="button">Add to Cart</button>
        </div>
      </article>
    </div>
  );
}
