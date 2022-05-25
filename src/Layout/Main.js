import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import Deck from "./Deck";

function Main() {
  const [decks, setDecks] = useState([]);

  const loadDecks = async () => {
    const decks = await listDecks();
    //console.log("decks: ", decks);
    setDecks(decks);
  };

  /* load decks when app start */
  useEffect(() => {
    loadDecks();
  }, []);

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
          loadDecks={loadDecks}
        />
      ))}
    </div>
  );
}

export default Main;
