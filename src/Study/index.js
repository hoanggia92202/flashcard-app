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
  //const { name, cards } = decks;

  //retrieve the deck using deckId
  useEffect(() => {
    const loadDeck = async () => {
      const deck = await readDeck(deckId);
      setTitle(deck.name);
      setCards([...deck.cards]);
      //console.log("study", deck);
    };
    loadDeck();
  }, [deckId]);

  return (
    //console.log("study", deckId),
    <div className="container">
      <Navigation name={title} />
      <Title name={title} />
      {cards.length < 3 ? (
        <NotEnoughCard cards={cards} />
      ) : (
        <Card cards={cards} />
      )}
    </div>
  );
}

export default Study;
