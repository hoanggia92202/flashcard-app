import React from "react";
import Navigation from "./Navigation";
import Form from "./Form";

function NewDeck({
  title,
  name = null,
  description = null,
  id = null,
  loadDeck = null,
}) {
  return (
    <div className="container">
      <Navigation deckName={name} type={title} />
      <h1>{title}</h1>
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