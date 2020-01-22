import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../components/loader/Loader";
import Navigation from "./navigation/Navigation";

const LoadableHomePage = lazy(() =>
  import("../pages/Home" /* webpackChunkName: "home-page" */)
);

const LoadableMoviePage = lazy(() =>
  import("../pages/MoviePage" /* webpackChunkName: "MoviePage" */)
);

const LoadableMoviesPage = lazy(() =>
  import("../pages/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);

const LoadableNotFound = lazy(() =>
  import("../pages/NotFound" /* webpackChunkName: "NotFound" */)
);

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact component={LoadableHomePage} />
            <Route path="/movies/:movieid" component={LoadableMoviePage} />
            <Route path="/movies" component={LoadableMoviesPage} />
            <Route component={LoadableNotFound} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
