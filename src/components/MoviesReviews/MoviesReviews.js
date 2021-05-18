import React, { Component } from "react";
import axios from "axios";

class MoviesReviews extends Component {
  state = {
    reviews: [],
    movie_id: this.props.movieId
  };

  async componentDidMount() {
    // console.log(this.state);
    // console.log(this.props.movieId);

    if (this.props.movieId) {
      const movie_id = this.props.movieId;
      const result = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=fd24293d59cd022df746242a4a847605&language=en-US&page=1`
        )
        .then(responce => responce.data.results);
      this.setState({ reviews: result });
    }
  }

  render() {
    // console.log(this.props);
    return (
      <>
        {this.state.reviews.length > 0 ? (
          <ul>
            {this.state.reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          "Путсо!"
        )}
      </>
    );
  }
}

export default MoviesReviews;
