import PageNotFound from "components/PageNotFound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddEdit from "./pages/AddEdit";
import Show from "./pages/Show";

Collection.propTypes = {};

function Collection(props) {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={Show} />
      <Route path={`${match.url}/add`} component={AddEdit} />
      <Route path={`${match.url}/:pokemonName`} component={AddEdit} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Collection;
