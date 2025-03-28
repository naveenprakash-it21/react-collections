import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/protectedRoute";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import OrderConfirm from "./components/OrderConfirm";
import NotFound from "./components/Notfound";
import AuthPage from "./pages/Auth"; // New Auth Page
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();

  // Hide header for auth page
  const hideHeaderPaths = ["/auth"];
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <div className="App">
      {shouldShowHeader && <Header />} {/* Conditionally Render Header */}

      <Routes>
        {/* Public Routes */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Routes */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/order-confirmation" 
          element={
            <ProtectedRoute>
              <OrderConfirm />
            </ProtectedRoute>
          } 
        />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
