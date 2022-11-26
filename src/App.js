import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favmovies from "./pages/Favmovies";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/fav-movies" element={<Favmovies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
