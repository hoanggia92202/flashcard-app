import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ deckName = "", cardId = "" }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/`}>{deckName}</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {`Add Card ${cardId}`}
        </li>
      </ol>
    </nav>
  );
};

export default Navigation;
