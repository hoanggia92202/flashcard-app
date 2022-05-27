import React from "react";
import Navigation from "./Navigation";
import Deck from "./Deck";
import Cards from "./Cards";

const Main = ({ deckInfo, loadDeck }) => {
  return (
    <>
      <Navigation deckInfo={deckInfo} />
      <Deck deckInfo={deckInfo} />
      <h2 className="mt-4">Cards</h2>
      <Cards deckInfo={deckInfo} loadDeck={loadDeck} />
    </>
  );
};

export default Main;
