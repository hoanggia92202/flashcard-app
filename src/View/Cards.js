import React from "react";
import Card from "./Card";

const Cards = ({ deckInfo }) => {
  const { cards } = deckInfo;
  return (
    <>
      {cards
        ? cards.map(({ front, back, id }) => (
            <Card key={id} front={front} back={back} />
          ))
        : null}
    </>
  );
};

export default Cards;
