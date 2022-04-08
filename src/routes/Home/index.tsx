import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Movie from '../../components/Movie';
import { useTheme } from '@emotion/react';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props:any) => props.theme.backgroundColor};
`;

function Home() {
  const theme = useTheme();

  const [movieLoading, setMovieLoading] = useState(true);
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5`,
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setMovieLoading(false);
  };

  return (
    <Wrapper theme={theme}>
      {movieLoading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          {movies.map(movie => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </Wrapper>
  );
}

export default Home;
