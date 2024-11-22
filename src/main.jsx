import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./components/styles.css";
import App from "./App.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Provider store= {store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
