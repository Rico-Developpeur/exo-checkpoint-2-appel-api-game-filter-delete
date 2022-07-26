import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GameList from "./components/GameList/GameList";
import Header from "./components/Header/Header";
import GameDetail from "./components/GameDetail/GameDetail";

function App() {
  //props Header
  const name = "game site";

  return (
    <Router>
      <div className="App">
        <Header name={name} />
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:id" element={<GameDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
