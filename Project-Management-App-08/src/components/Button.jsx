const buttonStyles = {
  normal: "rounded-md px-2 py-2 min-w-10 font-semibold select-none ",
  plain: "",
  outline: "border-2 border-black py-2 px-2 ",
};

const buttonColors = {
  gray: "bg-gray-300 text-black hover:bg-gray-400",
  blue: "bg-blue-200 text-blue-700 hover:bg-blue-300",
  green: "bg-green-400 text-green-900 hover:bg-green-500",
};

function fetchColor(color) {
  if (color) {
    return buttonColors[color];
  }
  return buttonColors.gray;
}

export default function Button({ children, color, className, ...props }) {
  const buttonStyle = buttonStyles.normal;
  const buttonColor = fetchColor(color);

  //DEBUG PURPOSES
  <p className="text-blue"></p>;

  const buttonClass = buttonStyle + buttonColor + " " + className;
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
