import React from "react";
import { Link } from "react-router-dom";

function Deck() {
  return (
    <>
      <Link to="/decks/new">
        <button type="button" className="btn btn-primary btn-lg">
          + Create Deck
        </button>
      </Link>
      <div className="row">
        <div className="col-sm-7">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Special title treatment</h5>
                <h6>3 cards</h6>
              </div>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div>
                <button type="button" className="btn btn-secondary btn-lg">
                  View
                </button>
                <button type="button" className="btn btn-primary btn-lg">
                  Study
                </button>
                <button type="button" className="btn btn-danger btn-lg">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deck;
