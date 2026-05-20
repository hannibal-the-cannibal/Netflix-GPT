import { options } from "../../utils/constant"
import { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../utils/movieSlice"

const useTopRatedMovies= ()=>{
    
    //Fetch data from API and update redux store 
    const dispatch= useDispatch();

    const getTopRatedMovies= async()=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options);
            const data = await response.json();
            console.log("Popular Movies:", data.results);
            dispatch(addTopRatedMovies(data.results));
        }
        catch (error) {
            console.error("Error fetching Popular movies:", error);
        }
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies;