import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ id, medium_cover_image, title, summary, genres }: any) {
  return (
    <div>
      <div>
        <img src={medium_cover_image} alt="" />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g: any) => (
            <li key={g}>g</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
