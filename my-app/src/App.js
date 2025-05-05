import React from 'react';
import './App.css';
import './components/mobile-optimizations.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatWeDo from './components/WhatWeDo';
import Members from './components/Members';
import ExecutiveBoard from './components/ExecutiveBoard';
import Placement from './components/Placement';
import Gallery from './components/Gallery';
import Apply from './components/Apply';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/members" element={<Members />} />
          <Route path="/executive-board" element={<ExecutiveBoard />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
