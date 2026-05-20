import { options } from "../../utils/constant"
import { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../utils/movieSlice"

const usePopularMovies= ()=>{
    
    //Fetch data from API and update redux store 
    const dispatch= useDispatch();

    const getPopularMovies= async()=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options);
            const data = await response.json();
            console.log("Popular Movies:", data.results);
            dispatch(addPopularMovies(data.results));
        }
        catch (error) {
            console.error("Error fetching Popular movies:", error);
        }
    }

    useEffect(()=>{
        getPopularMovies();
    },[]);
}

export default usePopularMovies;