import React, { Component } from 'react';
import services from '../services/services';
import ListMoviesTrending from '../components/listMoviesTrending/ListMoviesTrending';

class Home extends Component {
  state = {
    items: null,
  };

  componentDidMount = async () => {
    try {
      const response = await services.getTrendingList();
      this.setState({ items: response.data.results });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        {items && (
          <ListMoviesTrending location={this.props.location} items={items} />
        )}
      </>
    );
  }
}

export default Home;
