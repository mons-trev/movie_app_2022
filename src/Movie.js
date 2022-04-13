import React, { Component } from "react";
import PropTypes from 'prop-types';

class Movie extends Component {
  render() {
    const { id, title, year, genres, summary, medium_cover_image } = this.props;
    return (
      <div>
          <img src={cover_img} alt={title} title={title} />
        <div>
          <h3>{title}</h3>
          <h3>{year}</h3>
          <ul>
              {genres.map((data, index) =>(
                  <li key={index}>{data}</li>
              ))}
          </ul>
          <p>{summary.slice(0, 100)} ...</p>
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