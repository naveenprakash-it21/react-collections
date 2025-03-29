
//Creates and provides a global authentication context.
// Allows any component to access authentication data
import { createContext, useContext, useEffect, useState } from "react";
//A Firebase method that listens for changes in user authentication status.
//Logs out the user from Firebase.
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

//React Context named AuthContext 
const AuthContext = createContext(null);


//{ children } ensures all components inside AuthProvider
export const AuthProvider = ({ children }) => {

  //user: Stores the currently authenticated user
  //Updates the user state when authentication status changes.
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    //Listens for authentication state changes.
    //Updates user whenever a user logs in or out.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //Stores the authenticated user in state.
      setUser(currentUser);
      if (currentUser) {
        localStorage.setItem("isAuthenticated", "true");
      } else {
        localStorage.removeItem("isAuthenticated");
      }
    });
    //Stops listening to authentication changes 
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user === null) {//User not logged in
      navigate("/auth"); 
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  const logout = async () => {
    await signOut(auth);//Logs out the user from Firebase.
    localStorage.removeItem("isAuthenticated");
    navigate("/auth");
  };

  //{children} ensures any component inside AuthProvider
  return <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>;
};


// custom hook that allows components easily access user and logout.
export const useAuth = () => {
  return useContext(AuthContext);
};



/*
Creates an authentication context (AuthContext).

Listens for authentication state changes (onAuthStateChanged).

Stores and updates the user state (setUser).

Redirects users based on authentication (useEffect with navigate).

Provides a logout function to sign out users (signOut(auth)).

Wraps the app with AuthProvider so child components can access authentication data.

Provides a useAuth() hook for easy access to user and logout. */