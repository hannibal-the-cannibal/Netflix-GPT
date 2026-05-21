import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice"

const appStore= configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptReducer
    }
});

export default appStore;