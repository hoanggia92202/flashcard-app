import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Layout from "./Layout";
import CreateDeck from "./CreateDeck";
import Study from "./Study";
import View from "./View";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  const { path } = useRouteMatch();

  return (
    console.log("route match from App.js", path),
    (
      <div className="app-routes">
        <Switch>
          <Route exact={true} path="/">
            <Layout />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId">
            <View />
          </Route>
        </Switch>
      </div>
    )
  );
}

export default App;
