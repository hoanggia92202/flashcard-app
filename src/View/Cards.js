import React from "react";
import Card from "./Card";

const Cards = ({ deckInfo, loadDeck }) => {
  const { cards } = deckInfo;
  return (
    <>
      {/* if there is any card in the deck, pass its values to Card component for render */}
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
