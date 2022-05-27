import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api";

const Deck = ({ deckInfo }) => {
  const { name, description, id } = deckInfo;
  const history = useHistory();

  const deleteButtonHandler = async () => {
    const confirm = window.confirm(
      "\nDelete this deck ?\n\nYou will not be able to recover it."
    );
    if (confirm) {
      await deleteDeck(id);
      history.push("/");
    }
  };

  return (
    <div className="row">
      <div className="col-sm-7">
        <div className="card">
          <div className="card-body  ">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{name}</h5>
            </div>
            <p className="card-text">{description}</p>
            <div className="row">
              <div className="col-9">
                <Link to={`/decks/${id}/edit`}>
                  <button type="button" className="btn btn-secondary btn-md">
                    Edit
                  </button>
                </Link>
                <Link to={`/decks/${id}/study`}>
                  <button type="button" className="btn btn-primary btn-md ml-2">
                    Study
                  </button>
                </Link>
                <Link to={`/decks/${id}/cards/new`}>
                  <button type="button" className="btn btn-primary btn-md ml-2">
                    Add Cards
                  </button>
                </Link>
              </div>
              <div className="col-3">
                <button
                  onClick={deleteButtonHandler}
                  type="button"
                  className="btn btn-danger btn-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deck;
