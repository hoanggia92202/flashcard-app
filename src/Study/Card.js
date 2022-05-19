import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";

const Card = ({ cards }) => {
  const history = useHistory();
  const [index, setIndex] = useState(0);
  const totalCard = cards.length;
  const cardNumber = index + 1;
  const currentCard = cards[index];
  const [cardSide, setCardSide] = useState(currentCard.front);
  const [nextButton, setNextButton] = useState(false);

  useEffect(() => {
    /* set card to front side if next card is selected  */
    setCardSide(currentCard.front);
  }, [currentCard]);

  const flipButtonHandler = () => {
    /* flip card front/back  */
    setCardSide(
      cardSide === currentCard.front ? currentCard.back : cards[index].front
    );
    /* enable next button */
    setNextButton(true);
  };

  const nextButtonHandler = () => {
    /* if end of deck */
    if (index === cards.length - 1) {
      const confirm = window.confirm(
        "\nRestart cards ?\n\nClick 'cancel' to return to the home page."
      );
      if (confirm) {
        setIndex(0);
        setNextButton(false);
      } else {
        history.push("/");
      }
    } else {
      /* increase card index  */
      setIndex((preCard) => preCard + 1);
    }
  };

  return (
    <div className="row">
      <div className="col-sm-7">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{`Card ${cardNumber} of ${totalCard}`}</h5>
            </div>
            <p className="card-text">{cardSide}</p>
            <Button buttonType={"Flip"} buttonTypeHandler={flipButtonHandler} />
            {nextButton ? (
              <Button
                buttonType={"Next"}
                buttonTypeHandler={nextButtonHandler}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
