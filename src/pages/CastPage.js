import React, { Component } from 'react';
import services from '../services/services';
import CastPageComponent from '../components/castPageComponent/CastPageComponent';
import styled from '../components/castPageComponent/castPage.module.css';
const searchId = props => props.match.params.movieid;

class ReviewsPage extends Component {
  state = {
    item: null,
  };

  componentDidMount = async () => {
    try {
      const id = searchId(this.props);
      const response = await services.getAllInformationMovieCredits(id);
      this.setState({ item: response.data.cast });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { item } = this.state;
    return (
      <>
        {item && (
          <ul className={styled.list}>
            {item.map(el => (
              <CastPageComponent {...el} key={el.id} />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ReviewsPage;
