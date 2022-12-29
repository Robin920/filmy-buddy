import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './App.css';
import MyNav from './components/navbar';
import SearchBar from './components/search/search';
import Footer from './components/footer/Footer';
import Recommendation from './components/recommendation/Recommendation';


const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
  const [APIURL, setAPIURL] = useState("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("popular");

  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    axios.get(APIURL)
      .then(
        (response) => {
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  const getSearchedMovies = () => {
    axios.get(
      SEARCHAPI + search
    )
      .then(
        (response) => {
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => { 
          console.log(error);
        }
      )
  }

  useEffect(
    () => {
      setMovies([]);
      if (search === "") {
        getAllMovies();
      } else {
        setCat("search")
        getSearchedMovies();
      }
    },
    [search]
  )

  const popMovie = async () => {
    setMovies([]);
    const response = await axios.get(APIURL)
      .then(
        (response) => {
          return response.data.results;
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
    setMovies(response);
    setCat("popular");
    setSearch("");
    }
  const upComing = async () => {
  console.log("top -rated");
  setMovies([]);
  const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1")
    .then(
      (response) => {
        return response.data.results;
      }
    )
    .catch(
      (error) => {
        console.log(error)
      }
    )
  setMovies(response);
  setCat("upComing");
  setSearch("");
  }
  const topRated = async () => {
    console.log("top -rated");
    setMovies([]);
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1")
      .then(
        (response) => {
          return response.data.results;
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
    setMovies(response);
    setCat("topRated");
    setSearch("");
  }
  const action = async () => {
    console.log("top -rated");
    setMovies([]);
    const response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=28")
      .then(
        (response) => {
          return response.data.results;
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
    setMovies(response);
    setCat("action");
    setSearch("");
  }
  const comedy = async () => {
    console.log("top -rated");
    setMovies([]);
    const response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=35")
      .then(
        (response) => {
          return response.data.results;
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
    setMovies(response);
    setCat("comedy");
    setSearch("");
  }
  const horror = async () => {
    console.log("top -rated");
    setMovies([]);
    const response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=27")
      .then(
        (response) => {
          return response.data.results;
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
    setMovies(response);
    setCat("horror");
    setSearch("");
  }
  return (
    <div className='body'>
      <MyNav/>
      <SearchBar searchVal={search} onSearch={changeTheSearch}/>
      <div className='categories'>
        <button onClick={popMovie} className="cat-btn">Popular Movies</button>
        <button onClick={topRated} className="cat-btn">Top Rated Movies</button>
        <button onClick={upComing} className="cat-btn">Upcoming Movies</button>
        <button onClick={action} className="cat-btn">Action</button>
        <button onClick={comedy} className="cat-btn">Comedy</button>
        <button onClick={horror} className="cat-btn">Horror</button>
      </div>
      {(() => {
        switch (cat) {
          case 'popular':
            return (movies.length === 0?<div> Loading... </div>:<Recommendation movies={movies} heading="Popular Movies"/>)
          case 'topRated':
            return (movies.length === 0?<div> Loading... </div>:<Recommendation movies={movies} heading="Top-Rated Movies"/>)
          case 'upComing':
            return (movies.length === 0?<div> Loading... </div>:<Recommendation movies={movies} heading="Upcoming Movies"/>)
          case 'action':
            return (movies.length === 0?<div> Loading... </div>:<Recommendation movies={movies} heading="Action Movies"/>)
          case 'comedy':
            return (movies.length === 0?<div> Loading... </div>:<Recommendation movies={movies} heading="Comedy Movies"/>)
          case 'horror':
            return (movies.length === 0?<div> Loading... </div>:<Recommendation movies={movies} heading="Horror Movies"/>)
          case 'search':
            return (movies.length === 0?<div> Loading... </div>:<Recommendation movies={movies} heading="Search Result..."/>)
          default:
            return <div> Loading... </div>
        }
      })()}
      <Footer/>
    </div>
  );
}

export default App;
