import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Nava from './components/Nav/Nav';


import './App.css';

function App() {
  return (
    
    <Router>
      <Nava />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Error/>} />
        <Route path="/detail/:id" element={<ProductDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
