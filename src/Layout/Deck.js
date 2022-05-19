import React from "react";
import { Link } from "react-router-dom";

const Deck = ({ name, description, cards, id }) => {
  const deleteButtonHandler = () => {
    const confirm = window.confirm(
      "\nDelete this deck ?\n\nYou will not be able to recover it."
    );
  };
  return (
    <div className="row">
      <div className="col-sm-7">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{name}</h5>
              <h6>{cards.length}</h6>
            </div>
            <p className="card-text">{description}</p>
            <div>
              <Link to={`/decks/${id}`}>
                <button type="button" className="btn btn-secondary btn-lg">
                  View
                </button>
              </Link>
              <Link to={`/decks/${id}/study`}>
                <button type="button" className="btn btn-primary btn-lg">
                  Study
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-danger btn-lg"
                onClick={deleteButtonHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deck;
