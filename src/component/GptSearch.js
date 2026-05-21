import GptMovieSugg from "./GptMovieSugg";
import GptSearchBar from "./GptSearchBar";

const GptSearch=()=>{
    return (
        <div>
            <GptSearchBar/>
            <GptMovieSugg/>
        </div>
    )
}

export default GptSearch;