import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

    if (!movies?.nowPlayingMovies) return null;
    if(!movies?.popularMovies) return null;
    if(!movies?.topRatedMovies) return null;
    if(!movies?.upComingMovies) return null;

    return (
        <div className="bg-black">
        <div className="-mt-48 relative z-30 px-2">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
        </div>
        </div>
    );
};

export default SecondaryContainer;