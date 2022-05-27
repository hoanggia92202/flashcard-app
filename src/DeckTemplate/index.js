import React from "react";
import Navigation from "./Navigation";
import Form from "./Form";

function NewDeck({ title, name = "", description = "", id = "", loadDeck }) {
  return (
    <div className="container">
      <Navigation deckName={name} type={title} />
      <h2>{title}</h2>
      <Form
        defaultDeckName={name}
        defaultDescription={description}
        title={title}
        id={id}
        loadDeck={loadDeck}
      />
    </div>
  );
}

export default NewDeck;
