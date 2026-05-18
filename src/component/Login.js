import Header from "./Header";
import { useRef, useState } from "react";
import checkValidData from "../utils/validate";

const Login=()=>{
    const[isSignIn, setIsSignIn]=useState(true);
    const [errorMessage, setErrorMessage]=useState(null);

    const togglesiginform=()=>{
        // Logic to toggle between sign in and sign up forms
        setIsSignIn(!isSignIn);
    }

    const email= useRef(null);
    const password= useRef(null);
    const username= useRef(null);

    const handleButtonClick=()=>{
        //validate the form data and then navigate to browse page
        const emailValue= email.current?.value;
        const passwordValue= password.current?.value;
        const usernameValue= username.current?.value;
        const errorMessage=checkValidData(emailValue, passwordValue);
        setErrorMessage(errorMessage);
            if(!errorMessage){
                // Navigate to browse page
                window.location.href="/browse";
            }
    };

    return(
        <div>
        <div className="login">
            <Header />
            <img className="w-full h-full object-cover" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw" alt="Netflix Login Image" />
        </div>
        <form onSubmit={(e)=> e.preventDefault()}   className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-70 p-8 rounded-md">
                <h2 className="text-3xl mb-6 text-white">{isSignIn ? "Enter your info to Sign In" : "Create your account"}</h2>
                {!isSignIn && <input ref={username} type="text" placeholder="Username" className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white" />}
                <input ref={email} type="text" placeholder="Email" className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white" />
                <input ref={password} type="password" placeholder="Password" className="w-full p-3 mb-6 rounded-md bg-gray-800 text-white" />
                <button className="w-full bg-red-600 py-3 rounded-md text-white font-bold " onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                {errorMessage && <p className="text-red-500 mt-4 text-md">{errorMessage}</p>}
                <p className="text-white mt-4 text-md">{isSignIn ? "New to Netflix?" : "Already have an account?"} <span className="text-blue-500 cursor-pointer" onClick={togglesiginform}>{isSignIn ? "Sign up now" : "Sign in now"}</span></p>
            </div>
            
        </form>
        </div>


    );
}

export default Login;