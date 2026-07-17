export default function Button({ children, textButton, ...props }) {
  const className = !textButton ? "button" : "text-button";
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
