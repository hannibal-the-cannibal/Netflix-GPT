import { options } from "../../utils/constant"
import { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice"

const useNowPlayingMovies= ()=>{
    
    //Fetch data from API and update redux store 
    const dispatch= useDispatch();

    const getnowPlayingMovies= async()=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options);
            const data = await response.json();
            console.log("Now Playing Movies:", data.results);
            dispatch(addNowPlayingMovies(data.results));
        }
        catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    }

    useEffect(()=>{
        getnowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;