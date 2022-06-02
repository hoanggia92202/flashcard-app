import React from "react";
import Navigation from "./Navigation";
import Form from "./Form";

// this tenplate is used by AddCard.js and EditCard.js
const NewCard = ({ card = {}, deckName = "" }) => {
  const { back, front, id: cardId, deckId } = card;

  return (
    <div className="container">
      <Navigation deckName={deckName} cardId={cardId} />
      <h2>{cardId ? `Edit Card` : `${deckName}: Add Card`}</h2>
      <Form front={front} back={back} cardId={cardId} deckId={deckId} />
    </div>
  );
};

export default NewCard;
