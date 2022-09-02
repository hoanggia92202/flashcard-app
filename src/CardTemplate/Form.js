import React, { useEffect } from "react";
import { createCard, updateCard } from "../utils/api";
import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";

const Form = ({ front = "", back = "", cardId = "", deckId = "" }) => {
  const { deckId: paramDeckId } = useParams();
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const history = useHistory();

  useEffect(() => {
    setCardFront(front);
    setCardBack(back);
  }, [back, front]);

  /* update user input field */
  const onChangeHandler = (event) => {
    if (event.target.id === "front") {
      setCardFront(event.target.value);
    } else {
      setCardBack(event.target.value);
    }
  };

  /* when user click "done" or "cancel" */
  const clickButtonHandler = () => {
    history.goBack();
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    /* if cardId exist, then update the card */
    if (cardId) {
      await updateCard({
        front: cardFront,
        back: cardBack,
        id: cardId,
        deckId: deckId,
      });
      history.goBack();
    } else {
      /* if cardId does not exist, then create a new card */
      await createCard(paramDeckId, {
        front: cardFront,
        back: cardBack,
      });
      setCardFront(front);
      setCardBack(back);
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
        onClick={clickButtonHandler}
        type="button"
        className="btn btn-secondary btn-md mr-2"
      >
        Cancel
      </button>
      <button type="submit" className="btn btn-primary btn-md">
        Save
      </button>
    </form>
  );
};

export default Form;
