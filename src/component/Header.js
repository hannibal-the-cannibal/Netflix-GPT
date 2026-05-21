import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_PROFILE_PIC, NETFLIX_LOGO } from "../utils/constant";
import {toggleGptView} from "../utils/gptSlice"

const Header=()=>{
    const navigate= useNavigate();
    const dispatch= useDispatch();

    const user= useSelector((state)=> state.user);
    const showGptview= useSelector(store=> store.gpt.showGptView);

    const handleGptPage=()=>{
        //toggle Gpt Search page
        dispatch(toggleGptView());

    }

    const handleSignout=()=>{
        // Sign out the user and navigate to login page
        signOut(auth).then(() => {
        // Sign-out successful
        //Navigate to login page
        }).catch((error) => {
        // An error happened.
        navigate("/error")
        });

    }

    
    useEffect(()=>{
        // Check if user is authenticated and then navigate to browse page
        // this function is coming from firebase auth and it will listen to the auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in at this point
            const {uid, email, displayName} = user;
            // dispatch an action to save the user data in the redux store

            dispatch(addUser({uid, email, displayName}));
            console.log("User is authenticated:", user);
            navigate("/browse");
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
        }
    });

    return () => {
        // Unsubscribe from the auth state changes when the component unmounts
        unsubscribe();
    };

    },[]);


    
    return(
        <div className="z-20 absolute px-8 py-4 bg-gradient-to-b from-black to-transparent w-full flex justify-between">
            <div className="">
                <img className="w-36 cursor-pointer" src={NETFLIX_LOGO} alt="Netflix Logo" />
            </div>
            {user && (
                <div className="flex items-center gap-4">
                    <img
                        className="w-10 h-10 rounded cursor-pointer"
                        src={USER_PROFILE_PIC}
                        alt="Netflix Profile"
                    />
                    <button className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer">{user?.displayName}</button>
                    <button
                        onClick={handleSignout}
                        className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
                    >
                        Sign Out
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
                    onClick={handleGptPage}>
                        {!showGptview? "GPT-search": "HomePage"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Header;