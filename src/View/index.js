import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import Cards from "./Cards";
import Deck from "./Deck";
import Navigation from "./Navigation";
import NewCard from "../NewCard/NewCard";
import { readDeck } from "../utils/api";

function View() {
  const { path } = useRouteMatch();
  const { deckId } = useParams();
  const [deckInfo, setDeckInfo] = useState({});

  useEffect(() => {
    const loadDeck = async () => {
      const { name, description, id, cards } = await readDeck(deckId);
      setDeckInfo({ name, description, id, cards });
    };
    loadDeck();
  }, [deckId]);

  return (
    <div className="container">
      <Switch>
        <Route exact={true} path={`${path}`}>
          <Navigation />
          <Deck deckInfo={deckInfo} />
          <h1>Cards</h1>
          <Cards deckInfo={deckInfo} />
        </Route>
        <Route path={`${path}/cards/new`}>
          <NewCard />
        </Route>
      </Switch>
    </div>
  );
}

export default View;
