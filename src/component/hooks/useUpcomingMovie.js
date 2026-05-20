import { options } from "../../utils/constant"
import { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../../utils/movieSlice"

const useUpcomingMovies= ()=>{
    
    //Fetch data from API and update redux store 
    const dispatch= useDispatch();

    const getUpcomingMovies= async()=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, options);
            const data = await response.json();
            console.log("Popular Movies:", data.results);
            dispatch(addUpComingMovies(data.results));
        }
        catch (error) {
            console.error("Error fetching Upcoming movies:", error);
        }
    }

    useEffect(()=>{
        getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;