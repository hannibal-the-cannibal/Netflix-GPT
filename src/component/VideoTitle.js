import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="z-10 w-screen aspect-video pt-[15%] px-16 absolute text-white bg-gradient-to-r from-black">
            
            <h1 className="text-4xl font-bold drop-shadow-lg font-sans">
                {title}
            </h1>

            <p className="py-6 text-lg w-1/3 text-gray-200 leading-7 drop-shadow-md font-serif">
                {overview}
            </p>

            <div className="flex items-center gap-4">
                
                {/* Play Button */}
                <button className="flex items-center gap-2 bg-white text-black px-8 py-3 text-xl font-semibold rounded-md hover:bg-opacity-80 transition duration-200">
                    <FaPlay />
                    <span>Play</span>
                </button>

                {/* More Info Button */}
                <button className="flex items-center gap-2 bg-gray-500 bg-opacity-70 text-white px-8 py-3 text-xl font-semibold rounded-md hover:bg-opacity-50 transition duration-200">
                     <AiOutlineInfoCircle />
                    <span>More Info</span>
                </button>

            </div>
        </div>
    );
};

export default VideoTitle;