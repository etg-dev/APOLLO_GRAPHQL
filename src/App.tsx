import React from "react";
import "./App.css";
import CharectersList from "./pages/characters/CharectersList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Character from "./pages/character/Character";
import Search from "./components/search/Search";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<CharectersList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
