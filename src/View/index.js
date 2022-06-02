import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import EditDeck from "./EditDeck";
import EditCard from "./EditCard";
import AddCard from "./AddCard";
import Main from "./Main";

function View() {
  const { path } = useRouteMatch();

  return (
    <div className="container">
      <Switch>
        <Route exact={true} path={`${path}`}>
          <Main />
        </Route>
        <Route path={`${path}/cards/new`}>
          <AddCard />
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck />
        </Route>
        <Route path={`/decks/:deckId/cards/:cardId/edit`}>
          <EditCard />
        </Route>
      </Switch>
    </div>
  );
}

export default View;
