import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation"
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;