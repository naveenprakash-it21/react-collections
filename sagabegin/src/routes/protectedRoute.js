import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated")); // Ensure proper parsing

  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
