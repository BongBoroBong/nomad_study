import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ id, medium_cover_image, title, summary, genres, year }: any) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <div>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul>
          {genres.map((g: any) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
