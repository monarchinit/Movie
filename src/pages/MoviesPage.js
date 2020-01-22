import React, { Component } from 'react';
import queryString from 'query-string';
import SearchComponent from '../components/searchComponent/SearchComponent';
import services from '../services/services';
import ListMoviesTrending from '../components/listMoviesTrending/ListMoviesTrending';

const getQueryParams = props => {
  const queryParams = queryString.parse(props.location.search);
  return queryParams.query;
};

class MoviesPage extends Component {
  state = { items: null };

  componentDidMount = async () => {
    try {
      const word = getQueryParams(this.props);
      if (word) {
        const response = await services.searchMovies(word);
        this.setState({ items: response.data.results });
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidUpdate = async (prevProp, prevState) => {
    try {
      const word = getQueryParams(this.props);
      if (prevProp.location.search !== this.props.location.search) {
        const response = await services.searchMovies(word);
        this.setState({ items: response.data.results });
      }
    } catch (e) {
      console.log(e);
    }
  };

  historyPush = value => {
    if (value && value[0] !== ' ') {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${value}`,
      });
    }
  };
  render() {
    const { items } = this.state;
    return (
      <>
        <SearchComponent
          word={getQueryParams(this.props) ? getQueryParams(this.props) : ''}
          onSubmit={this.historyPush}
        />
        {items && <ListMoviesTrending items={items} />}
      </>
    );
  }
}

export default MoviesPage;
