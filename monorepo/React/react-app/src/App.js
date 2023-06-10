import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Options from "./components/pages/Options";


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/options" element={<Options />} />
    </Routes>
  );
}

export default App;
