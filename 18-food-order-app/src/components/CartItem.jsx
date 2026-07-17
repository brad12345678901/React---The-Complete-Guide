export default function CartItem ({ item }) {
  return (
    <li className="cart-item">
      <p>{item.name}</p>
      <span className="cart-item-actions">
        <button>-</button>
        <p>{item.quantity}</p>
        <button>+</button>
      </span>
    </li>
  );
}
