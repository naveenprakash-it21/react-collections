import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        localStorage.setItem("isAuthenticated", "true");
      } else {
        localStorage.removeItem("isAuthenticated");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user === null) {
      navigate("/auth"); 
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("isAuthenticated");
    navigate("/auth");
  };

  return <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
