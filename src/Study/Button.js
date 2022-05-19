import React from "react";

const Button = ({ buttonType, buttonTypeHandler }) => {
  return (
    <button
      onClick={buttonTypeHandler}
      type="button"
      className={`btn btn-${
        buttonType === "Flip" ? "secondary" : "primary"
      } btn-lg`}
    >
      {buttonType}
    </button>
  );
};

export default Button;
