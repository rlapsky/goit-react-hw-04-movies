import React, { Component } from "react";
import axios from "axios";
import { NavLink, Route } from "react-router-dom";
import MovieCast from "../components/MovieCast/MovieCast";
import MoviesReviews from "../components/MoviesReviews/MoviesReviews";

class MovieDetailsPage extends Component {
  state = {};

  async componentDidMount() {
    const movie_id = this.props.match.params.movieId;
    const result = await axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=fd24293d59cd022df746242a4a847605`)
      .then(responce => responce.data);
    this.setState({ ...result });
  }

  goBackFunc = () => {
    this.props.history.push(this.props.history.location?.state ?? "/");
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.goBackFunc}>
          Go Back
        </button>
        {this.state.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${this.state.poster_path}`} alt="" />}
        <h1>
          {this.state.original_title} ({this.state.release_date?.slice(0, 4)})
        </h1>

        <p>User Score: {this.state.vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{this.state.overview}</p>
        <h2>Genres</h2>
        <ul>
          {this.state.genres?.map(genre => (
            <li key={genre.id}>{genre.name} </li>
          ))}
        </ul>
        <h2>Additional Info</h2>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: this.props.location?.state
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: this.props.location?.state
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route path={`${this.props.match.url}/cast`} render={props => <MovieCast {...props} movieId={this.state.id} />} />
        <Route
          path={`${this.props.match.url}/reviews`}
          render={props => <MoviesReviews {...props} movieId={this.state.id} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
