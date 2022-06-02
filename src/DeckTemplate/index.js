import React from "react";
import Navigation from "./Navigation";
import Form from "./Form";

// this component is used by EditDeck.js and Layout/index.js
function NewDeck({ title, name = "", description = "", id = "" }) {
  return (
    <div className="container">
      <Navigation deckName={name} type={title} />
      <h2>{title}</h2>
      <Form
        defaultDeckName={name}
        defaultDescription={description}
        title={title}
        id={id}
      />
    </div>
  );
}

export default NewDeck;
