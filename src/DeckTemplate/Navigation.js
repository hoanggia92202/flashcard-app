import React from "react";
import { Link, useParams } from "react-router-dom";

const Navigation = ({ deckName, type }) => {
  const { deckId } = useParams();
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={`/`}>Home</Link>
        </li>
        {/* if deckName is true, render the nav-bar with deckName */}
        {deckName ? (
          <>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to={`/decks/${deckId}`}>{deckName}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {type}
            </li>
          </>
        ) : (
          <li className="breadcrumb-item active" aria-current="page">
            {type}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Navigation;
