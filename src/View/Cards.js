import React from "react";
import Card from "./Card";

const Cards = ({ deckInfo, loadDeck }) => {
  const { cards } = deckInfo;
  return (
    //console.log("Cards: ", deckInfo),
    <>
      {cards
        ? cards.map(({ front, back, id, deckId }) => (
            <Card
              key={id}
              front={front}
              back={back}
              id={id}
              deckId={deckId}
              loadDeck={loadDeck}
            />
          ))
        : null}
    </>
  );
};

export default Cards;
