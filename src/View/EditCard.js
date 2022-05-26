import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateCard, readCard, readDeck } from "../utils/api";
import NewCard from "../NewCard";

const EditCard = (loadDeck) => {
  const { deckId, cardId } = useParams();
  const [card, setCard] = useState({});
  const [deckName, setDeckName] = useState("");
  //console.log("ppppp", loadDeck(deckId));
  useEffect(() => {
    const loadCard = async () => {
      const card = await readCard(cardId);
      setCard({ ...card });
      const deck = await readDeck(deckId);
      setDeckName(deck.name);
      //loadDeck(deckId);
    };
    loadCard();
  }, [cardId, deckId]);

  return (
    //console.log("edit card: ", param),
    <NewCard card={card} deckName={deckName} />
  );
};

export default EditCard;
