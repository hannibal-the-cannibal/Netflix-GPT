import { use, useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Body=()=>{
    const dispatch= useDispatch();


    useEffect(()=>{
        // Check if user is authenticated and then navigate to browse page
        // this function is coming from firebase auth and it will listen to the auth state changes
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in at this point
            const {uid, email, displayname} = user;
            // dispatch an action to save the user data in the redux store

            dispatch(addUser({uid, email, displayname}));
        } else {
            // User is signed out
            dispatch(removeUser());
            //navigate to login page
        }
    });
    },[]);

    const appRouter= createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);


    return(
        <div >
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default Body;