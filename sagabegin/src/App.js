//Retrieves the current URL path (useLocation)
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./routes/protectedRoute";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import OrderConfirm from "./components/OrderConfirm";
import NotFound from "./components/Notfound";
//authentication (Login/Signup) page.
import AuthPage from "./pages/Auth"; 
import { ToastContainer } from "react-toastify";

function App() {
  //retrieves the current URL path
  const location = useLocation();

  // Hide header for auth page
  // paths where the header should be hidden.
  const hideHeaderPaths = ["/auth"];
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <div className="App">
      {shouldShowHeader && <Header />} {/* Conditionally Render Header */}

      <Routes>
        {/* renders the AuthPage component */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Routes - Only logged-in users can access it. */}
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
