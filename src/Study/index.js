import React from "react";
import Navigation from "./Navigation";
import Card from "./Card";
import Title from "./Title";
import { useParams } from "react-router-dom";

function Study({ decks }) {
  const { deckId } = useParams();
  const deck = decks.filter((deck) => deck.id === parseFloat(deckId));
  const { cards } = deck[0];

  return (
    <div className="container">
      <Navigation />
      <Title />
      <Card cards={cards} />
    </div>
  );
}

export default Study;
