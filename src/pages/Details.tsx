import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Product } from '../components/ProductsBox';
import { getProductById } from '../services/api';

function Details() {
  const { id }: { id?: string } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        return <p>Erro: Produto não encontrado</p>;
      }
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Ocorreu um erro ao buscar o produto', error);
        setProduct(null);
      }
    };
    fetchProduct();
  }, [id]);

  const handleCartClick = () => {
    navigate('/carrinho', { state: cart });
  };

  if (!product) {
    return <p>Carregando detalhes do produto...</p>;
  }

  const handleAddCart = () => {
    const checkItem = cart.some((item) => item.id === product.id );
    let arr = [];
    if(checkItem) {
      arr = cart.map((cartProduct) => {
        if(cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1
          }
        }
        return cartProduct;
      })
      // arr = [... cart, {
      //   ...product, 
      //   quantity: product.quantity + 1
      // }]
    }
    else {
      arr = [
        ...cart,
        {
        ...product,
        quantity: 1
        }
      ]
      console.log('entrei no else')

    }
    console.log(arr);
    setCart(arr);
  }

  const handleBackToInitialPage = () => {
    navigate('/', { state: cart })
  }

  return (
    <div>
      <button data-testid="shopping-cart-button" onClick={ () => handleCartClick() }>
        Ver meu Carrinho
      </button>
      <h1 data-testid="product-detail-name">{product.title}</h1>
      <img
        src={ product.thumbnail }
        alt={ `imagem de ${product.title}` }
        data-testid="product-detail-image"
      />
      <h2 data-testid="product-detail-price">{product.price}</h2>
      <button data-testid="product-detail-add-to-cart" onClick={ handleAddCart }>
        Adicionar ao Carrinho
      </button>
      <button onClick={ handleBackToInitialPage }>Voltar para a página inicial</button>
    </div>
  );
}

export default Details;
