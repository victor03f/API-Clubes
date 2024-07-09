import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Players from './components/Players';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players/:clubId" element={<Players />} />
      </Routes>
    </Router>
  );
}

export default App;
