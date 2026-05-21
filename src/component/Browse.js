import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies"
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse=()=>{

    const showGptview= useSelector(store=> store.gpt.showGptView);
    //console.log(showGptview);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return(
        <div>
            <Header />
            {
                showGptview ? <GptSearch/> : <>
                <MainContainer/>
                <SecondaryContainer/>
                </>
            }
        </div>
    );
}

export default Browse;