import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import Cards from "./Cards";
import Deck from "./Deck";
import Navigation from "./Navigation";
import NewCard from "../NewCard";
import EditDeck from "./EditDeck";
import { readDeck } from "../utils/api";

/* only show 1 deck, and cards for that single deck */
function View() {
  const { path } = useRouteMatch();
  const { deckId } = useParams();
  const [deckInfo, setDeckInfo] = useState({});

  const loadDeck = async (deckId) => {
    const deck = await readDeck(deckId);
    setDeckInfo({ ...deck });
  };

  useEffect(() => {
    loadDeck(deckId);
  }, [deckId]);

  return (
    <div className="container">
      <Switch>
        <Route exact={true} path={`${path}`}>
          <Navigation deckInfo={deckInfo} />
          <Deck deckInfo={deckInfo} />
          <h1>Cards</h1>
          <Cards deckInfo={deckInfo} loadDeck={loadDeck} />
        </Route>
        <Route path={`${path}/cards/new`}>
          <NewCard name={deckInfo.name} />
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck deckInfo={deckInfo} loadDeck={loadDeck} />
        </Route>
      </Switch>
    </div>
  );
}

export default View;
