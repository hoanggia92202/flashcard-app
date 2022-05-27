import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import Deck from "./Deck";

function Main() {
  const [decks, setDecks] = useState([]);

  /* retrieve list of decks */
  const loadDecks = async () => {
    const decks = await listDecks();
    setDecks(decks);
  };

  /* call loadDecks() when app start */
  useEffect(() => {
    loadDecks();
  }, []);

  return (
    <div className="container">
      <Link to="/decks/new">
        <button type="button" className="btn btn-primary btn-md mb-2">
          + Create Deck
        </button>
      </Link>
      {/* render each deck */}
      {decks.map(({ name, description, cards, id }) => (
        <Deck
          key={id}
          name={name}
          description={description}
          cards={cards}
          id={id}
          loadDecks={loadDecks}
        />
      ))}
    </div>
  );
}

export default Main;
