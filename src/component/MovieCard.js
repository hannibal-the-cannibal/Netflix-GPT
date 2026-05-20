import { IMG_URL } from "../utils/constant";
const MovieCard=({posterPath})=>{
    return(
        <div className="w-56 h-56 pr-5">
            <img alt="Movie Card" src={IMG_URL+ posterPath}/>
        </div>
    )

}

export default MovieCard;