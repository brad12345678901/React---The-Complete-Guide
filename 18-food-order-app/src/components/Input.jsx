export default function Input({ label, id, error, ...props }) {
  return (
    <span className="control">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props} />
      {error && <p className="error-paragraph">{error}</p>}
    </span>
  );
}
