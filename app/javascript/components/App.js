import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Airline from "./Airline";
import Airlines from "./Airlines";
import Reviews from "./Reviews";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Airlines />} />
          <Route path="/airlines/:slug" element={<Airline />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
