import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Study from "../Study";
import View from "../View";
import CreateDeck from "../CreateDeck";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { listDecks } from "../utils/api";
import NotFound from "./NotFound";

function Layout() {
  const { path } = useRouteMatch();
  const [decks, setDecks] = useState([]);

  const loadDecks = async () => {
    const decks = await listDecks();
    console.log("decks: ", decks);
    setDecks(decks);
  };

  /* load decks when app start */
  useEffect(() => {
    loadDecks();
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact={true} path={`${path}`}>
          <Main decks={decks} />
        </Route>
        <Route path={`${path}decks/:deckId/study`}>
          <Study />
        </Route>
        <Route path={`${path}decks/new`}>
          <CreateDeck />
        </Route>
        <Route path={`${path}decks/:deckId`}>
          <View />
        </Route>
      </Switch>
    </>
  );
}

export default Layout;
