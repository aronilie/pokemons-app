import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" />} />
      <Route path="/pokemon" element={<Home />} />
    </Routes>
  );
}

export default App;
