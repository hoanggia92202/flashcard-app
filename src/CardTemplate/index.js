import React from "react";
import Navigation from "./Navigation";
import Form from "./Form";

const NewCard = ({ card = {}, deckName = "", loadDeck }) => {
  const { back, front, id: cardId, deckId } = card;

  return (
    <div className="container">
      <Navigation deckName={deckName} cardId={cardId} />
      <h2>{cardId ? `Edit Card` : `${deckName}: Add Card`}</h2>
      <Form
        front={front}
        back={back}
        cardId={cardId}
        deckId={deckId}
        loadDeck={loadDeck}
      />
    </div>
  );
};

export default NewCard;
