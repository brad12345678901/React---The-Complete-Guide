export default function Input({ label, id, ...props }) {
  return (
    <span className="control">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props}/>
    </span>
  );
}
