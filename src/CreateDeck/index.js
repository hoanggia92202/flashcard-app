import React from "react";
import Navigation from "./Navigation";
import Form from "./Form";
import { useRouteMatch } from "react-router-dom";

function CreateDeck() {
  const { path } = useRouteMatch();
  return (
    //console.log("createZDeck match", path),
    <div className="container">
      <Navigation />
      <h1>Create Deck</h1>
      <Form />
    </div>
  );
}

export default CreateDeck;
