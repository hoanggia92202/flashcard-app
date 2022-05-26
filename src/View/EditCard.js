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
      const card = await readCard(cardId);
      setCard({ ...card });
      const deck = await readDeck(deckId);
      setDeckName(deck.name);
    };
    loadCard();
  }, [cardId, deckId, loadDeck]);

  return <CardTemplate card={card} deckName={deckName} loadDeck={loadDeck} />;
};

export default EditCard;
