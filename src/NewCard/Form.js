import React from "react";
import { createCard } from "../utils/api";
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { useState } from "react";

const Form = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { deckId } = useParams();
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  const onChangeHandler = (event) => {
    if (event.target.id === "front") {
      setCardFront(event.target.value);
    } else {
      setCardBack(event.target.value);
    }
  };

  const submitHandler = async (event) => {
    //event.preventDefault();
    const newCard = await createCard(deckId, {
      front: cardFront,
      back: cardBack,
    });
    console.log("new card: ", newCard);
    //history.push(`/decks/${newDeck.id}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          onChange={onChangeHandler}
          value={cardFront}
          className="form-control"
          id="front"
          rows="3"
          placeholder="Front side of card"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          onChange={onChangeHandler}
          value={cardBack}
          className="form-control"
          id="back"
          rows="3"
          placeholder="Back side of card"
        ></textarea>
      </div>
      <Link to={`/decks/${deckId}`}>
        <button type="button" className="btn btn-primary btn-lg">
          Done
        </button>
      </Link>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default Form;
