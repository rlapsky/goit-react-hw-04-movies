import React, { Component } from "react";
import axios from "axios";

class MovieCast extends Component {
  state = {
    movieCast: []
  };

  async componentDidMount() {
    const movie_id = this.props.movieId;
    const result = await axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=fd24293d59cd022df746242a4a847605&language=en-US`)
      .then(responce => responce.data);
    this.setState({ movieCast: result.cast });
    console.log(this.state);
  }

  render() {
    return (
      <>
        {this.state.movieCast.length > 0 ? (
          <ul>
            {this.state.movieCast.map(actor => (
              <li key={actor.id}>
                {actor.profile_path && <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" />}
                <h3>{actor.name}</h3>
                <p>{actor.character}</p>
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

export default MovieCast;
