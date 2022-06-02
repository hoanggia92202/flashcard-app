import CardTemplate from "../CardTemplate";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import React, { useEffect, useState } from "react";

const AddCard = () => {
  const { deckId } = useParams();
  const [deckName, setDeckInfo] = useState("");

  useEffect(() => {
    async function loadDeck() {
      const { name: deckName } = await readDeck(deckId);
      setDeckInfo(deckName);
    }
    loadDeck();
  }, [deckId]);

  return <CardTemplate deckName={deckName} />;
};

export default AddCard;
