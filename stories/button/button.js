import "./button.css";

export const createButton = ({
  label,
  style = "outlined",
  size = "medium",
}) => {
  const button = document.createElement("button");
  button.type = "submit";
  button.role = "button";
  button.innerHTML = label;
  button.className = ["button", `button--${size}`, `button--${style}`].join(
    " ",
  );
  return button;
};
