import { Link } from "react-router-dom";
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const { deckId } = useParams();
  const [deckName, setDeckName] = useState("");

  useEffect(() => {
    async function loadDeck() {
      const { name } = await readDeck(deckId);
      setDeckName(name);
    }
    loadDeck();
  }, [deckId]);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {deckName}
        </li>
      </ol>
    </nav>
  );
};

export default Navigation;
