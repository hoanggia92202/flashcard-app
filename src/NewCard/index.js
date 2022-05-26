import React, { useEffect } from "react";
import Navigation from "./Navigation";
import Form from "./Form";

const NewCard = ({ card = {}, deckName = "" }) => {
  const { back, front, id: cardId, deckId } = card;

  return (
    //console.log("load deck>>>: ", ),
    <div className="container">
      <Navigation deckName={deckName} cardId={cardId} />
      <h1>{cardId ? `Edit Card` : `${deckName}: Add Card`}</h1>
      <Form front={front} back={back} cardId={cardId} deckId={deckId} />
    </div>
  );
};

export default NewCard;
