import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Card from "./Card";
import Title from "./Title";
import NotEnoughCard from "./NotEnoughCard";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

function Study() {
  const { deckId } = useParams();
  const [title, setTitle] = useState("");
  const [cards, setCards] = useState([]);

  /* retrieve the deck using deckId */
  useEffect(() => {
    const loadDeck = async () => {
      const deck = await readDeck(deckId);
      setTitle(deck.name);
      setCards([...deck.cards]);
    };
    loadDeck();
  }, [deckId]);

  return (
    <div className="container">
      <Navigation name={title} deckId={deckId} />
      <Title name={title} />
      {/* if less than 3 cards in the deck, render NotEnoughCard, else render Card */}
      {cards.length < 3 ? (
        <NotEnoughCard cards={cards} />
      ) : (
        <Card cards={cards} />
      )}
    </div>
  );
}

export default Study;
