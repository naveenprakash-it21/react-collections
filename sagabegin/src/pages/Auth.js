import React, { useState } from "react";//manage mail,passwrod
import { useNavigate } from "react-router-dom";
//Firebase function to create a new user.
//irebase function to log in an existing user.
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//The Firebase authentication instance
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import "./Auth.css"; // Import Auth Styles

const AuthPage = () => {
  // boolean to toggle between Login and Signup
  const [isSignup, setIsSignup] = useState(false);
  //store passwrod,email and error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault(); //Prevents the page from reloading 
    setError(null); // Resets error state

    try {
        //Calls createUserWithEmailAndPassword(auth, email, password),
        //Registers a new user in Firebase.
        if (isSignup) {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Signup successful!");
        } else {
             //Calls signInWithEmailAndPassword(auth, email, password)
             //Logs in an existing user.
            const successfullLogin=await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("isAuthenticated",true)
            //console.log("successfullLogin")
            toast.success("Login successful!");
        }
        navigate("/");
    } catch (error) { //If authentication fails 
        toast.error("Invalid");
    }
};


  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignup ? "Create an Account" : "Welcome Back"}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <p onClick={() => setIsSignup(!isSignup)} className="switch-auth">
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
