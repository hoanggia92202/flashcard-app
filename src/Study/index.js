import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Card from "./Card";
import Title from "./Title";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

function Study() {
  const { deckId } = useParams();
  const [title, setTitle] = useState("");
  //const [cards, setCards] = useState([]);
  //const { name, cards } = decks;

  //retrieve the deck using deckId

  return (
    //  console.log("study", decks),
    <div className="container">
      <Navigation />
      <Title name={"p"} />
      <Card cards={"p"} />
    </div>
  );
}

export default Study;
