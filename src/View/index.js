import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import Cards from "./Cards";
import Deck from "./Deck";
import Navigation from "./Navigation";
import NewCard from "../NewCard/NewCard";
import { readDeck } from "../utils/api";

/* only show 1 deck, and cards for that single deck */
function View() {
  const { path } = useRouteMatch();
  const { deckId } = useParams();
  //const [deckInfo, setDeckInfo] = useState({});

  /*
const loadDeck = async (deckId) => {
    const { name, description, id, cards } = await readDeck(deckId);
    setDeckInfo({ name, description, id, cards });
  };

  useEffect(() => {
    loadDeck(deckId);
  }, [deckId]);
  */

  return (
    <div className="container">
      <Switch>
        <Route exact={true} path={`${path}`}>
          <Navigation />
          <Deck decks={"p"} />
          <h1>Cards</h1>
          <Cards decks={"p"} />
        </Route>
        <Route path={`${path}/cards/new`}>
          <NewCard />
        </Route>
      </Switch>
    </div>
  );
}

export default View;
