import Banner from "components/Banner";
import Header from "components/Header";
import Loader from "components/Loader";
import PageNotFound from "components/PageNotFound";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

let Collection = lazy(() => import("features/collection"));

function App() {
  return (
    <div className="pokemon-app">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Banner />

            <Switch>
              <Redirect exact from="/" to="/collection" />
              <Route path="/collection" component={Collection} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
