import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import services from '../services/services';
import MoviePageComponent from '../components/moviePageComponent/MoviePageComponent';
import Loader from '../components/loader/Loader';

const LoadableCastPage = lazy(() =>
  import('./CastPage' /* webpackChunkName: "CastPage" */),
);

const LoadableReviewsPage = lazy(() =>
  import('./ReviewsPage' /* webpackChunkName: "ReviewsPage" */),
);

const searchId = props => props.match.params.movieid;

class MoviePage extends Component {
  state = {
    item: null,
  };

  componentDidMount = async () => {
    try {
      const id = searchId(this.props);
      const response = await services.getAllInformationMovie(id);
      this.setState({ item: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  handleGoBack = () => {
    if (this.props.location.state) {
      return this.props.history.push(this.props.location.state.from);
    } else {
      this.props.history.push('/');
    }
  };

  render() {
    const { item } = this.state;
    return (
      <>
        {item && <MoviePageComponent onGoBack={this.handleGoBack} {...item} />}
        <Suspense fallback={<Loader />}>
          <Route
            path={`${this.props.match.path}/cast`}
            component={LoadableCastPage}
          />
          <Route
            path={`${this.props.match.path}/reviews`}
            component={LoadableReviewsPage}
          />
        </Suspense>
      </>
    );
  }
}

export default MoviePage;
