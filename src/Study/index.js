import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Card from "./Card";
import Title from "./Title";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

function Study() {
  const { deckId } = useParams();
  const [title, setTitle] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadDeck = async () => {
      const deck = await readDeck(deckId);
      setTitle(deck.name);
      setCards(deck.cards);
    };
    loadDeck();
  }, [deckId]);

  return (
    <div className="container">
      <Navigation />
      <Title title={title} />
      <Card cards={cards} />
    </div>
  );
}

export default Study;
