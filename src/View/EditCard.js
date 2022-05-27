import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readCard, readDeck } from "../utils/api";
import CardTemplate from "../CardTemplate";

const EditCard = ({ loadDeck }) => {
  const { deckId, cardId } = useParams();
  const [card, setCard] = useState({});
  const [deckName, setDeckName] = useState("");

  useEffect(() => {
    const loadCard = async () => {
      try {
        const card = await readCard(cardId);
        const deck = await readDeck(deckId);
        setCard({ ...card });
        setDeckName(deck.name);
      } catch (error) {
        console.log("Error", error);
      }
    };
    loadCard();
  }, [cardId, deckId]);

  return <CardTemplate card={card} deckName={deckName} loadDeck={loadDeck} />;
};

export default EditCard;
