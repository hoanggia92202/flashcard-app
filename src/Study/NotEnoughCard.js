import React from "react";
import { useParams, Link } from "react-router-dom";

const NotEnoughCard = ({ cards }) => {
  const numberOfCard = cards.length;
  const { deckId } = useParams();

  return (
    <>
      <h4>Not Enough Cards.</h4>
      <h6>
        You need at least 3 cards to study. There are {numberOfCard} cards in
        this deck.
      </h6>
      <Link to={`/decks/${deckId}/cards/new`}>
        <button type="button" className="btn btn-primary btn-md mt-3">
          Add Card
        </button>
      </Link>
    </>
  );
};

export default NotEnoughCard;
