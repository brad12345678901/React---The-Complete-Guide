const buttonStyles = {
  normal: "rounded-md px-2 py-2 min-w-20 font-semibold select-none max-h-10 ",
  plain: "font-semibold max-h-10 ",
  outline: "border-2 border-black py-2 px-2 max-h-10 ",
};

const buttonColors = {
  gray: "bg-gray-300 text-black hover:bg-gray-400",
  blue: "bg-blue-200 text-blue-700 hover:bg-blue-300",
  green: "bg-green-400 text-green-900 hover:bg-green-500",
};

function fetchColor(color, props) {
  if (props.plain) {
    return "";
  }
  if (color) {
    return buttonColors[color];
  }
  return buttonColors.gray;
}

function fetchStyles(props) {
  if (props.plain) {
    return buttonStyles.plain;
  }
  if (props.outline) {
    return buttonStyles.outline;
  }
  return buttonStyles.normal;
}

export default function Button({
  children,
  color,
  className,
  plain,
  normal,
  outline,
  ...props
}) {
  const buttonStyle = fetchStyles({ plain, normal, outline });
  const buttonColor = fetchColor(color, { plain, normal, outline });

  //DEBUG PURPOSES
  <p className="text-blue"></p>;

  const buttonClass = buttonStyle + buttonColor + " " + className;
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
