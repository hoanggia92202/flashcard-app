import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import EditDeck from "./EditDeck";
import EditCard from "./EditCard";
import AddCard from "./AddCard";
import Main from "./Main";
import { readDeck } from "../utils/api";

function View() {
  const { path } = useRouteMatch();
  const { deckId } = useParams();
  const [deckInfo, setDeckInfo] = useState({});

  /* load a single deck base on the deck ID */
  const loadDeck = async (deckId) => {
    try {
      const deck = await readDeck(deckId);
      setDeckInfo({ ...deck });
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    loadDeck(deckId);
  }, [deckId]);

  return (
    <div className="container">
      <Switch>
        <Route exact={true} path={`${path}`}>
          <Main deckInfo={deckInfo} loadDeck={loadDeck} />
        </Route>
        <Route path={`${path}/cards/new`}>
          <AddCard deckName={deckInfo.name} loadDeck={loadDeck} />
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
