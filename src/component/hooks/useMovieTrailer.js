import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../../utils/movieSlice";
import { options } from "../../utils/constant";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();


  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options,
      );

      const json = await response.json();

      //console.log("All Videos:", json.results);

      const trailers = json.results.filter((video) => video.type === "Trailer");

      const trailer = trailers.length ? trailers[0] : json.results[0];

      //console.log("Selected Trailer:", trailer);

      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      }
    } catch (error) {
      console.error("Error fetching trailer videos:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]);
};

export default useMovieTrailer;
