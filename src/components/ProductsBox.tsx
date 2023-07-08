import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface Product {
  id: string
  title: string
  thumbnail: string
  price: string
  quantity: number
}

function ProductBox({ id, title, thumbnail, price, quantity }: Product) {
  const navigate = useNavigate();
  console.log(quantity);

  const handleProductClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <Link to={ `/details/${id}` } data-testid="product">
      <img src={ thumbnail } alt={ `imagem de ${title}` } />
      <h2>{price}</h2>
      <p>{title}</p>
      <button onClick={ handleProductClick } data-testid="product-detail-link">
        Ver detalhes
      </button>
    </Link>
  );
}

export default ProductBox;
