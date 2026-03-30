import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CounterProvider from "./components/Context/CounterContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CounterProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CounterProvider>
    </StrictMode>
  </BrowserRouter>,
);
