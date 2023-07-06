// import React from 'react';
import { Route, Routes } from 'react-router-dom';

// // Api
// import * as api from './services/api';

// Pages
import Home from './pages/home';

// Css
import './App.css';
import Carrinho from './pages/Carrinho';

// api.getCategories().then((categories) => { console.log(categories); });
// api.getProductsFromCategoryAndQuery('MLB271599', 'Agro').then((a) => { console.log(a); });
// api.getProductById('MLB3174626530').then((product) => { console.log(product); });

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/carrinho" element={ <Carrinho /> } />
      </Routes>
    </div>
  );
}

export default App;
