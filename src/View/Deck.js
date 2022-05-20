import React from "react";
import { Link } from "react-router-dom";

const Deck = ({ deckInfo }) => {
  const { name, description, id } = deckInfo;

  return (
    <div className="row">
      <div className="col-sm-7">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{name}</h5>
              <h6>{}</h6>
            </div>
            <p className="card-text">{description}</p>
            <div>
              <Link>
                <button type="button" className="btn btn-secondary btn-lg">
                  Edit
                </button>
              </Link>
              <Link to={`/decks/${id}/study`}>
                <button type="button" className="btn btn-primary btn-lg">
                  Study
                </button>
              </Link>
              <Link to={`/decks/${id}/cards/new`}>
                <button type="button" className="btn btn-primary btn-lg">
                  Add Card
                </button>
              </Link>
              <button type="button" className="btn btn-danger btn-lg">
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
