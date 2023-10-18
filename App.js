import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PokemonsList from "./src/components/PokemonsList.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" />} />
      <Route path="/pokemon" element={<PokemonsList />} />
    </Routes>
  );
}

export default App;
