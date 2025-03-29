import { Navigate } from "react-router-dom";

//A functional component acts wrapper around protected pages.
//children- component/page that displayed if user is authenticated.
const ProtectedRoute = ({ children }) => {
  console.log('children: ', children);
  // If the user is authenticated, isAuthenticated =  (renders children )
  // If the user not authenticated, isAuthenticated = null (/auth)
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated")); 
  console.log('isAuthenticated: ', isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
