import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { PokemonsProvider } from "./src/store/pokemonsContext.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <PokemonsProvider>
      <App />
    </PokemonsProvider>
  </BrowserRouter>
);
