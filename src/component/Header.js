import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{
    const navigate= useNavigate();

    const user= useSelector((state)=> state.user);

    const handleSignout=()=>{
        // Sign out the user and navigate to login page
        signOut(auth).then(() => {
        // Sign-out successful
        //Navigate to login page
        navigate("/");

        }).catch((error) => {
        // An error happened.
        navigate("/error")
        });

    }


    
    return(
        <div className="absolute px-8 py-4 bg-gradient-to-b from-black to-transparent w-full flex justify-between">
            <div className="">
                <img className="w-36 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
            </div>
            {user && (
                <div className="flex items-center gap-4">
                    <img
                        className="w-10 h-10 rounded cursor-pointer"
                        src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                        alt="Netflix Profile"
                    />
                    <button className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer">{user?.displayName}</button>
                    <button
                        onClick={handleSignout}
                        className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
}

export default Header;