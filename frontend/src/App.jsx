import React, { useState, createContext, useEffect } from "react";

import Axios from "axios";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubComponent from "./SubComponent";
import Rukshan from "./Rukshan";
import Login from "./Login";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SubComponent></SubComponent>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/Rukshan" element={<Rukshan></Rukshan>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
