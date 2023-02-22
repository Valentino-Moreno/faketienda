import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home'
import Category1 from './pages/Category1/Category1';
import Category2 from './pages/Category2/Category2'
import Category3 from './pages/Category3/Category3';
import Category4 from './pages/Category4/Category4';
import Error from './pages/Error/Error'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Nava from './components/Nav/Nav';


import './App.css';


function App() {
  return (
    
    <Router>
      <Nava />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category1' element={<Category1/>} />
        <Route path='/Category2' element={<Category2/>} />
        <Route path='/category3' element={<Category3/>} />
        <Route path='/Category4' element={<Category4/>} />
        <Route path='*' element={<Error/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />

      </Routes>
    </Router>
  );
}

export default App;
