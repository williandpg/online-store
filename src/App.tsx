import { useEffect, useState } from 'react';

// import React from 'react';
import { Route, Routes } from 'react-router-dom';

// // Api
// import * as api from './services/api';

// Pages
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import Details from './pages/Details';
import { Product } from './components/ProductsBox';

// Css
import './App.css';

// api.getCategories().then((categories) => { console.log(categories); });
// api.getProductsFromCategoryAndQuery('MLB271599', 'Agro').then((a) => { console.log(a); });
// api.getProductById('MLB3174626530').then((product) => { console.log(product); });

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const getFromLS = JSON.parse(localStorage.getItem('ML_item') as string);

    if (getFromLS) {
      setCart(getFromLS);
    }
    // console.log(cart);
  }, []);

  useEffect(() => {
    const cartStringfy = JSON.stringify(cart);
    localStorage.setItem('ML_item', cartStringfy);
  }, [cart]);

  const addToCart = (product:Product | null) => {
    const checkItem = cart?.some((item) => item.id === product?.id);
    let arr = [];

    if (checkItem) {
      arr = cart.map((cartProduct) => {
        if (cartProduct.id === product?.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        return cartProduct;
      });
    } else {
      arr = [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    setCart(arr as Product[]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/carrinho" element={ <Carrinho cart={ cart } /> } />
        <Route path="/details/:id" element={ <Details addToCart={ addToCart } /> } />
      </Routes>
    </div>
  );
}

export default App;
