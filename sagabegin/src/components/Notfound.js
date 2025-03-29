import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';
const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="Notfound">
            <img src="404error.jpg" alt="Page Not Found" />
            <h2>Oops! Page Not Found</h2>
            <p>The page you are looking for doesn't exist.</p>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
};

export default NotFound;
