import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from './components/Movies';

const URL = "https://api.themoviedb.org/3";
const API_KEY = "e2ca177fc064cb1406d8e1717e83b6f0";
const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

function App() {
    const [originals, setOriginals] = useState([]);
    const [trending, setTrending] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        // Load originals
        axios
        .get(`${URL}${endpoints.originals}`, {
            params: {
                api_key: API_KEY,
            },
        }).then((res) => {
            setOriginals(res.data.results);
            console.log(res.data.results);
        });

        console.log(originals);

        // Load trending
        axios
        .get(`${URL}${endpoints.trending}`, {
            params: {
                api_key: API_KEY,
            },
        }).then((res) => setTrending(res.data.results));

        // Load now playing
        axios
        .get(`${URL}${endpoints.now_playing}`, {
            params: {
                api_key: API_KEY,
            },
        }).then((res) => setNowPlaying(res.data.results));

        // Load popular
        axios
        .get(`${URL}${endpoints.popular}`, {
            params: {
                api_key: API_KEY,
            },
        }).then((res) => setPopular(res.data.results));

        // Load top rated
        axios
        .get(`${URL}${endpoints.top_rated}`, {
            params: {
                api_key: API_KEY,
            },
        }).then((res) => setTopRated(res.data.results));

        // Load upcoming
        axios
        .get(`${URL}${endpoints.upcoming}`, {
            params: {
                api_key: API_KEY,
            },
        }).then((res) => setUpcoming(res.data.results));

    }, []);

    return (
        <>
            <Movies title="Netflix Originals" movies={originals} />
            <Movies title="Trending Now" movies={trending} />
            <Movies title="Now Playing" movies={nowPlaying} />
            <Movies title="Popular" movies={popular} />
            <Movies title="Top Rated" movies={topRated} />
            <Movies title="Upcoming" movies={upcoming} />
        </>
    );
}

export default App;
