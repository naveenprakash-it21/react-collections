import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import Header from './components/Header';
import Main from './components/Main';
import NotFound from './components/Notfound';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
      <ToastContainer /> {/* Add this at the bottom for global notifications */}
    </div>
  );
}

export default App;
