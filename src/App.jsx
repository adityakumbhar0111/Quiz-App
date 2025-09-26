import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Result from "./Components/Result";
import "./App.css";
import Navbar from "./Components/Navbar";
import Instruction from "./Components/Instruction";
import Quiz from "./Components/Quiz";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Instruction" element={<Instruction />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
