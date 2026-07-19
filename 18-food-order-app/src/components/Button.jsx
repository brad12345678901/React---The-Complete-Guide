import { useFormStatus } from "react-dom";

export default function Button({
  children,
  textButton,
  fallbackText,
  type,
  ...props
}) {
  const className = !textButton ? "button" : "text-button";
  const isSubmitButton = type === "submit" ? true : false;
  const { pending } = useFormStatus();
  return (
    <button
      className={className}
      type={type}
      {...props}
      disabled={isSubmitButton ? pending : false}
    >
      {pending ? fallbackText : children}
    </button>
  );
}
