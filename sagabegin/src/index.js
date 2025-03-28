import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";  // Ensure this path is correct
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>  {/* Wrap App with Provider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
