import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const NotEnoughCard = ({ cards }) => {
  const numberOfCard = cards.length;
  const { deckId } = useParams();

  return (
    console.log("NotEnoughCard  param: ", deckId),
    (
      <>
        <h1>Not Enough Cards.</h1>
        <h5>
          You need at least 3 cards to study. There are {numberOfCard} cards in
          this deck.
        </h5>
        <Link to={`/decks/${deckId}/cards/new`}>
          <button type="button" className="btn btn-primary btn-lg">
            Add Card
          </button>
        </Link>
      </>
    )
  );
};

export default NotEnoughCard;
