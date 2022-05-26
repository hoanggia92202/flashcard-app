import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import Cards from "./Cards";
import Deck from "./Deck";
import Navigation from "./Navigation";
import NewCard from "../NewCard";
import EditDeck from "./EditDeck";
import EditCard from "./EditCard";
import { readDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

/* only show 1 deck, and cards for that single deck */
function View() {
  const { path } = useRouteMatch();
  const { deckId } = useParams();
  const [deckInfo, setDeckInfo] = useState({});
  const history = useHistory();

  const loadDeck = async (deckId) => {
    console.log("load deck execute....");
    const deck = await readDeck(deckId);
    setDeckInfo({ ...deck });
  };

  useEffect(() => {
    loadDeck(deckId);
  }, [deckId]);

  return (
    //console.log("loadDeck????:", loadDeck),
    <div className="container">
      <Switch>
        <Route exact={true} path={`${path}`}>
          <Navigation deckInfo={deckInfo} />
          <Deck deckInfo={deckInfo} />
          <h1>Cards</h1>
          <Cards deckInfo={deckInfo} loadDeck={loadDeck} />
        </Route>
        <Route path={`${path}/cards/new`}>
          <NewCard deckName={deckInfo.name} />
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck deckInfo={deckInfo} loadDeck={loadDeck} />
        </Route>
        <Route path={`/decks/:deckId/cards/:cardId/edit`}>
          <EditCard loadDeck={loadDeck} />
        </Route>
      </Switch>
    </div>
  );
}

export default View;
