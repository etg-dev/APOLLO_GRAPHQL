import React from "react";
import "./App.css";
import CharectersList from "./components/characters/CharectersList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Character from "./pages/Character";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<CharectersList />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
