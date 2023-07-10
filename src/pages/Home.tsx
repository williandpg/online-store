// React
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Api
import { getProductsFromCategoryAndQuery } from '../services/api';

// Componente
import ProductBox from '../components/ProductsBox';
import type { Product } from '../components/ProductsBox';

import Navigation from './Navigation';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [productsSave, setProductsSave] = useState<Product[]>([]);
  const navigate = useNavigate();

  const search = async (id:string) => {
    try {
      const data = await getProductsFromCategoryAndQuery(id, searchTerm);
      if (data.results.length === 0) {
        setErrorMessage('Nenhum produto foi encontrado');
      } else {
        setErrorMessage('');
        setProducts(data.results);
      }
    } catch (error) {
      setErrorMessage('Ocorreu um erro ao buscar os produtos');
      setProducts([]);
    }
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search('');
  };

  function handleClick() {
    navigate('/carrinho');
  }

  const addProductToCart = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    const { id: selectProduct } = target as Element;
    const product = products.find((p) => p.id === selectProduct);
    if (!productsSave.includes(product)) {
      setProductsSave([...productsSave, product] as [Product, Product]);
      localStorage.setItem('chosenProduct', JSON.stringify(productsSave));
    }
  };

  return (
    <>
      <button data-testid="shopping-cart-button" onClick={ handleClick }>Carrinho</button>
      <Navigation
        func2={ search }
      />

      <form onSubmit={ handleSearch }>
        <input
          type="text"
          value={ searchTerm }
          onChange={ (e) => setSearchTerm(e.target.value) }
          data-testid="query-input"
        />
        <button type="submit" data-testid="query-button">
          Enviar
        </button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      {products.length === 0 && !errorMessage && (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      )}
      {products.length > 0 && (
        <div id="Produtos">
          {products.map((product) => (
            <div key={ product.id }>
              <ProductBox
                { ...product }
              />
              <button
                data-testid="product-add-to-cart"
                onClick={ addProductToCart }
                id={ product.id }
              >
                Adicionar ao carrinho
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default Home;
