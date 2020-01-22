import React, { Component } from 'react';
import services from '../services/services';
import ReviewsPageComponent from '../components/reviewsPageComponent/ReviewsPageComponent';

const searchId = props => props.match.params.movieid;

class ReviewsPage extends Component {
  state = {
    item: null,
  };

  componentDidMount = async () => {
    try {
      const id = searchId(this.props);
      const response = await services.getAllInformationMovieReviews(id);
      this.setState({ item: response.data.results });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { item } = this.state;

    return (
      <>
        {item &&
          (item.length === 0 ? (
            <h2>Unfortunately no comments</h2>
          ) : (
            <ul>
              {item.map(el => (
                <ReviewsPageComponent {...el} key={el.author} />
              ))}
            </ul>
          ))}
      </>
    );
  }
}

export default ReviewsPage;
