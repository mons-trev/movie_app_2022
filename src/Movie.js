import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

class Movie extends Component {
  render() {
    const { id, title, year, genres, summary, cover_img } = this.props;
    return (
      <div className="movie">
        <img className="img" src={cover_img} alt={title} title={title} />
        <div className="a">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((data, index) => (
              <li className="movie__year" key={index}>
                {data}
              </li>
            ))}
          </ul>
          <p>{summary.slice(0, 150)} ...</p>
        </div>
      </div>
    );
  }
}

export default Movie;
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
};