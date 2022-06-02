import React from "react";

const Button = ({ buttonType, buttonTypeHandler }) => {
  return (
    <button
      onClick={buttonTypeHandler}
      type="button"
      className={`btn btn-${
        // if buttonType === "Flip" then it's a flip-button, set it to secondary color
        // if buttonType !== "Flip" then it's a next-button, set it to primary color
        buttonType === "Flip" ? "secondary" : "primary"
      } btn-md mr-2`}
    >
      {buttonType}
    </button>
  );
};

export default Button;
