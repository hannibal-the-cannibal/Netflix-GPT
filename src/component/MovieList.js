import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) return null;

    return (
        <div className="p-6 text-white bg-gradient-to-r">
            <h1 className="text-3xl font-bold font-serif py-3">{title}</h1>
            <div className="flex overflow-x-hidden overflow-y-hidden ">
                <div className="flex">
                    {movies.map(movie=> <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
                </div>
            </div>
        </div>
    );
};

export default MovieList;