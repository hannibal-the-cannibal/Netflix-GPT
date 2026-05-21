import { BG_WALLPAPER } from "../utils/constant";

const GptSearchBar = () => {
  return (
    <div className="relative min-h-screen">

      {/* Background Image */}
      <img
        src={BG_WALLPAPER}
        alt="background"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          -z-10
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Search Section */}
      <div className="flex justify-center items-start pt-32">
        <form
          className="
            w-full max-w-3xl
            bg-black/60
            backdrop-blur-md
            border border-gray-700
            rounded-2xl
            shadow-2xl
            p-6
            flex gap-4
          "
        >
          <input
            type="text"
            placeholder="What do you want to watch today?"
            className="
              flex-1
              px-5 py-4
              rounded-xl
              bg-gray-900
              text-white
              text-lg
              outline-none
              border border-gray-700
              focus:border-red-500
              focus:ring-2 focus:ring-red-500
              placeholder-gray-400
            "
          />

          <button
            className="
              bg-red-600
              hover:bg-red-700
              transition duration-300
              text-white
              font-semibold
              px-8 py-4
              rounded-xl
              shadow-lg
              cursor-pointer
            " onClick={(e)=>e.preventDefault}
          >
            Search
          </button>
        </form>
      </div>

    </div>
  );
};

export default GptSearchBar;