// import { MoviesContainer, MoviesTitle } from "./Movies.styles";

function Movies({ title, movies }) {
    return (
        <div className="my-8">
            <div className="text-2xl font-bold uppercase mx-8">{title}</div>
            <div className="flex overflow-x-auto mt-4 p-4 MoviesRow">
                {movies.map((movie) => (
                    <img className="m-2 w-40 Movie" 
                    key={movie.id}
                    src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
                    alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Movies;