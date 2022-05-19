import React, { useState } from "react";
import { Link } from "react-router-dom";
import Deck from "./Deck";

function Main({ decks }) {
  return (
    <div className="container">
      <Link to="/decks/new">
        <button type="button" className="btn btn-primary btn-lg">
          + Create Deck
        </button>
      </Link>
      {decks.map(({ name, description, cards, id }) => (
        <Deck
          key={id}
          name={name}
          description={description}
          cards={cards}
          id={id}
        />
      ))}
    </div>
  );
}

export default Main;
