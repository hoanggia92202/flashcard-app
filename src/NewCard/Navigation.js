import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ name }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="breadcrumb-item">
          <a href="#">{name}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Add Card
        </li>
      </ol>
    </nav>
  );
};

export default Navigation;
