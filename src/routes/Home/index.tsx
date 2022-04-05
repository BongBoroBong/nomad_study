import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '../../components/Button';
import Movie from '../../components/Movie';

function Home() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [showing, setShowing] = useState(false);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [movieLoading, setMovieLoading] = useState(true);
  const [coins, setCoins] = useState<any[]>([]);
  const [movies, setMovies] = useState<any[]>([]);

  const onClick = () => setValue(prev => prev + 1);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setKeyword(event.target.value);
  };

  const onToggle = () => setShowing(prev => !prev);

  useEffect(() => {
    if (keyword !== '') console.log('search for', keyword);
  }, [keyword]);

  function Hello() {
    useEffect(() => {
      console.log('created :)');
      return () => console.log('destroyed :(');
    }, []);
    return <h1>Hello</h1>;
  }

  const todoChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTodo(event.target.value);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo === '') return;
    setTodos(currentArray => [todo, ...currentArray]);
    setTodo('');
  };

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5`)
    //   .then(response => response.json())
    //   .then(json => {
    //     setMovies(json.data.movies);
    //     setMovieLoading(false);
    //   });
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
    <div>
      <h1>Welcome back!!!</h1>
      <Button text="continue" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      {showing ? <Hello /> : null}
      <button onClick={onToggle}>{showing ? 'Hide' : 'Show'}</button>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={todoChange}
          type="text"
          placeholder="write your to do..."
        />
      </form>
      <h1>My To Dos ({todos.length})</h1>
      <ul>
        {todos.map((item, index) => (
          <li key={`todo_${index}`}>{item}</li>
        ))}
      </ul>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {/*{coins.map(coin => (*/}
        {/*  <li key={coin.id}>*/}
        {/*    {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}*/}
        {/*  </li>*/}
        {/*))}*/}
      </ul>
      <h1>The Movies! ({movies.length})</h1>
      {movieLoading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movies.map(movie => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
