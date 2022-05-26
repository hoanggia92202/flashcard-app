import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import { deleteDeck } from "../utils/api";

const Deck = ({ deckInfo }) => {
  const { name, description, id } = deckInfo;
  const { url } = useRouteMatch();
  const params = useParams();

  return (
    //console.log("Deck path: ", url),
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
                    Add Card
                  </button>
                </Link>
              </div>
              <div className="col-3">
                <button type="button" className="btn btn-danger btn-md">
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
