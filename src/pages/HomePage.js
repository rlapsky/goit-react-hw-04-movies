import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    filmData: []
  };
  async componentDidMount() {
    const result = await axios
      .get("https://api.themoviedb.org/3/trending/all/day?api_key=fd24293d59cd022df746242a4a847605")
      .then(responce => responce.data.results);
    this.setState({ filmData: result });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.filmData.map(film => (
            <li key={film.id}>
              <Link
                to={{
                  pathname: `/movies/${film.id}`,
                  state: this.props.location
                }}
              >
                {film.title || film.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
