import React from "react";

function Hero({ movie }) {
    return (
        <div className="p-8 HeroContainer" style={{
            background: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        }}>
            <h1 className="text-5xl font-bold mb-4 HeroTitle">
                {movie?.name}
            </h1>
            <p className="font-medium text-lg mb-4 HeroDescription">
                {movie?.overview}
            </p>
            <button className="cursor-pointer font-bold rounded px-8 py-2 mr-2 HeroButton">
                Play
            </button>
            <button className="cursor-pointer font-bold rounded px-8 py-2 mr-2 HeroButton">
                My List
            </button>
        </div>
    )
}

export default Hero;
