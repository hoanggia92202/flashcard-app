import React, { useEffect } from "react";
import { createCard, updateCard } from "../utils/api";
import { Link, useParams, useHistory } from "react-router-dom";
import { useState } from "react";

const Form = ({
  front = "",
  back = "",
  cardId = "",
  deckId = "",
  loadDeck,
}) => {
  const { deckId: paramDeckId } = useParams();
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const history = useHistory();

  useEffect(() => {
    setCardFront(front);
    setCardBack(back);
  }, [back, front]);

  const onChangeHandler = (event) => {
    if (event.target.id === "front") {
      setCardFront(event.target.value);
    } else {
      setCardBack(event.target.value);
    }
  };

  const onClickHandler = (type) => {
    if (type === "done") {
      history.goBack();
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (cardId) {
      await updateCard({
        front: cardFront,
        back: cardBack,
        id: cardId,
        deckId: deckId,
      });
      loadDeck(deckId);
      history.goBack();
    } else {
      await createCard(paramDeckId, {
        front: cardFront,
        back: cardBack,
      });
      //history.goBack();
    }
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
      <button
        onClick={() => onClickHandler("done")}
        type="button"
        className="btn btn-primary btn-md mr-2"
      >
        Done
      </button>
      <button type="submit" className="btn btn-primary btn-md">
        Save
      </button>
    </form>
  );
};

export default Form;
