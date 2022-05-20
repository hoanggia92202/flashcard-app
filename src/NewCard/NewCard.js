import React from "react";
import Navigation from "./Navigation";
import Form from "./Form";

const NewCard = () => {
  return (
    <div className="container">
      <Navigation />
      <h1>React Router: Add Card</h1>
      <Form />
    </div>
  );
};

export default NewCard;
