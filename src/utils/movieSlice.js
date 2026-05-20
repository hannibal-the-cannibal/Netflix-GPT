import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const movieSlice = createSlice({
    name: "movie",
    initialState: {
            nowPlayingMovies: null,
            trailerVideo: null,
            popularMovies: null,
            topRatedMovies: null,
            upComingMovies:null
    },
    reducers: {
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies=action.payload;

        },
        addUpComingMovies:(state, action)=>{
            state.upComingMovies=action.payload;

        },
        removeNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies= null;
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies=action.payload
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideo=action.payload;

        }
    }
})

export const {addNowPlayingMovies, addUpComingMovies, addTopRatedMovies,removeNowPlayingMovies, addTrailerVideo, addPopularMovies}= movieSlice.actions;

export default movieSlice.reducer;
