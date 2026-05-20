import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { FaPlay } from "react-icons/fa";

const MovieList = ({ title, movies }) => {

  const rowRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // Check scroll position
  const checkScroll = () => {
    const element = rowRef.current;

    if (!element) return;

    const scrollLeft = element.scrollLeft;
    const maxScrollLeft =
      element.scrollWidth - element.clientWidth;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft < maxScrollLeft - 10);
  };

  // Scroll Right
  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: rowRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  // Scroll Left
  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -rowRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScroll();

    const element = rowRef.current;

    element.addEventListener("scroll", checkScroll);

    return () => {
      element.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // ✅ Put condition AFTER hooks
  if (!movies || movies.length === 0) return null;

  return (
    <div className="p-6 text-white group relative">
      <h1 className="text-3xl font-bold font-serif py-3">
        {title}
      </h1>

      <div className="relative">

        {/* LEFT BUTTON */}
        {showLeft && (
          <button
            onClick={scrollLeft}
            className="
              absolute left-0 top-1/2 -translate-y-1/2 z-20
              h-full px-4
              bg-black/50 hover:bg-black/80
              opacity-0 group-hover:opacity-100
              transition duration-300
            "
          >
            <FaPlay className="rotate-180"/>
          </button>
        )}

        {/* RIGHT BUTTON */}
        {showRight && (
          <button
            onClick={scrollRight}
            className="
              absolute right-0 top-1/2 -translate-y-1/2 z-20
              h-full px-4
              bg-black/50 hover:bg-black/80
              opacity-0 group-hover:opacity-100
              transition duration-300
            "
          >
            <FaPlay />
          </button>
        )}

        {/* MOVIE ROW */}
        <div
          ref={rowRef}
          className="
            flex gap-4 overflow-x-scroll
            no-scrollbar scroll-smooth
          "
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="
                flex-shrink-0
                transition-transform duration-300
                hover:scale-105
              "
            >
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MovieList;