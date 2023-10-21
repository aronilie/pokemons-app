import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home/Home.jsx";
import PokemonDetail from "./src/pages/PokemonDetail/PokemonDetail.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" />} />
      <Route path="/pokemon" element={<Home />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;
