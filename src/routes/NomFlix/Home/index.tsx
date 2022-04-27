import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import styled from '@emotion/styled';
import { useMatch, useNavigate } from 'react-router-dom';

import { getMovies, IGetMoviesResult } from '../../../libs/api';
import { makeImagePath } from '../../../libs/util';

const Wrapper = styled.div`
  background-color: black;
  padding-bottom: 200px;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IBanner {
  bgphoto: string;
}

const Banner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props: IBanner) => props.bgphoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 36px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)<{ bgphoto: string }>`
  background-color: white;
  background-image: url(${props => props.bgphoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  position: relative;
  &:first-of-type {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${props => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  margin: 0 auto;
  left: 0;
  right: 0;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${props => props.theme.black.lighter};
`;

const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 500px;
`;

const BigTitle = styled.h3`
  color: ${props => props.theme.white.lighter};
  padding: 10px;
  font-size: 36px;
  position: relative;
  top: -60px;
`;

const BigOverview = styled.p`
  color: ${props => props.theme.white.lighter};
  padding: 20px;
  position: relative;
  top: -60px;
`;

const rowVariants = {
  hidden: { x: window.outerWidth + 5 },
  visible: { x: 0 },
  exit: { x: -window.outerWidth - 5 },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -80,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: 'tween',
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duaration: 0.3,
      type: 'tween',
    },
  },
};

const overalyVariants = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const offset = 6;

function Home() {
  const navigate = useNavigate();
  const bigMovieMatch = useMatch('/movies/:movieId');
  const { scrollY } = useViewportScroll();
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'nowPlaying'],
    getMovies,
  );

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving(prev => !prev);

  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  const onOverlayClicked = () => {
    navigate('/');
  };

  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(movie => String(movie.id) === bigMovieMatch.params.movieId);

  return (
    <Wrapper style={{ height: '200vh' }}>
      {isLoading ? (
        <Loader>...Loading</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgphoto={makeImagePath(data?.results[0].backdrop_path || '')}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}>
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map(movie => (
                    <Box
                      layoutId={movie.id + ''}
                      key={movie.id}
                      variants={boxVariants}
                      initial="normal"
                      whileHover="hover"
                      transition={{ type: 'tween' }}
                      onClick={() => onBoxClicked(movie.id)}
                      bgphoto={makeImagePath(movie.backdrop_path, 'w500')}>
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClicked}
                  variants={overalyVariants}
                  animate="initial"
                  exit="exit"
                />
                <BigMovie
                  layoutId={bigMovieMatch.params.movieId}
                  style={{
                    top: scrollY.get() + 100,
                  }}>
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `linear-gradient(black, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            'w500',
                          )})`,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                      <BigOverview>{clickedMovie.overview}</BigOverview>
                    </>
                  )}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
