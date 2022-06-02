import DeckTemplate from "../DeckTemplate";
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const EditDeck = () => {
  const { deckId } = useParams();
  const [deckInfo, setDeckInfo] = useState({});

  useEffect(() => {
    async function loadDeck() {
      const deck = await readDeck(deckId);
      setDeckInfo({ ...deck });
    }
    loadDeck();
  }, [deckId]);

  return (
    <DeckTemplate
      title={"Edit Deck"}
      name={deckInfo.name}
      description={deckInfo.description}
      id={deckInfo.id}
    />
  );
};

export default EditDeck;
