import React from "react";
import Navigation from "./Navigation";
import Form from "./Form";

const NewCard = ({ name }) => {
  return (
    <div className="container">
      <Navigation name={name} />
      <h1>{name}: Add Card</h1>
      <Form />
    </div>
  );
};

export default NewCard;
