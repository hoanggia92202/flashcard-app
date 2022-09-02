import Card from "./Card";
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const NoCardInDeck = () => {
  return <div className="alert alert-info display-5 col-sm-7" role="alert">
            No cards in deck.
         </div>
}

const Cards = () => {
  const { deckId } = useParams();
  const [cardsInfo, setCardsInfo] = useState([]);

  // load a deck of card
  useEffect(() => {
    async function loadDeck() {
      const { cards } = await readDeck(deckId);
      setCardsInfo([...cards]);
    }
    loadDeck();
  }, [deckId]);

  // reload a deck of card
  async function reLoadDeck() {
    const { cards } = await readDeck(deckId);
    setCardsInfo([...cards]);
  }
  return (
    <>
      {/* if there is any card in the deck, pass its values to Card component for render */}
      {cardsInfo.length >= 1
        ? cardsInfo.map(({ front, back, id, deckId }) => (
            <Card
              key={id}
              front={front}
              back={back}
              id={id}
              deckId={deckId}
              reLoadDeck={reLoadDeck}
            />
          ))
        : <NoCardInDeck />}
    </>
  );
};

export default Cards;
