import React from "react";
import Header from "./Header";
import Main from "./Main";
import Study from "../Study";
import View from "../View";
import NewDeck from "../DeckTemplate";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "./NotFound";

function Layout() {
  const { path } = useRouteMatch();

  return (
    <>
      <Header />
      <Switch>
        <Route exact={true} path={`${path}`}>
          <Main />
        </Route>
        <Route path={`${path}decks/:deckId/study`}>
          <Study />
        </Route>
        <Route path={`${path}decks/new`}>
          <NewDeck title={"Create Deck"} />
        </Route>
        <Route path={`${path}decks/:deckId`}>
          <View />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Layout;
