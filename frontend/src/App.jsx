import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import SubComponent from "./SubComponent";

export const CountContext = createContext();

export default function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [count, setCount] = useState(0);

  function SearchUp(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    async function grabMovies() {
      try {
        const response = await Axios.get(
          "https://yts.mx/api/v2/list_movies.json",
          {
            params: {
              limit: limit,
            },
          }
        );
        setMovies(response.data.data.movies);
      } catch (err) {
        console.error(err);
      }
    }
    grabMovies();
  }, [limit]);

  async function grabMoviesa(e) {
    e.preventDefault();
    try {
      const response = await Axios.get(
        `https://yts.mx/api/v2/list_movies.json`,
        {
          params: {
            query_term: search,
            limit: limit,
          },
        }
      );
      setMovies(response.data.data.movies);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(() => 0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount((x) => x + 1);
        }}
      >
        Increase
      </button>
      <form onSubmit={grabMoviesa}>
        <input onChange={SearchUp} placeholder="Search Film" />
        <input
          onChange={(e) => {
            setLimit(e.target.value);
          }}
          type="number"
          value={limit}
        />
        <button type="submit">Search for film</button>
      </form>

      {movies.length > 0 ? (
        movies.map((x) => (
          <div key={x.id}>
            <h1>{x.title}</h1>
            <img src={x.large_cover_image} alt={`image for ${x.title}`}></img>
            <br></br>
            <img src={x.background_image} alt={x.title} />
            <p>{x.description_full || `No description for ${x.title}`}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </>
  );
}
