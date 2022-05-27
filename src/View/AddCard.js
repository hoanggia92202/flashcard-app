import React from "react";
import CardTemplate from "../CardTemplate";

const AddCard = ({ deckName, loadDeck }) => {
  return <CardTemplate deckName={deckName} loadDeck={loadDeck} />;
};

export default AddCard;
