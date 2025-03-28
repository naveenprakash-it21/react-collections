import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import "./Auth.css"; // Import Auth Styles

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null); // Reset previous errors

    try {
        if (isSignup) {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Signup successful!");
        } else {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful!");
        }
        navigate("/");
    } catch (error) {
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
