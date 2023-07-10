import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../components/ProductsBox';
import { getProductById } from '../services/api';

function Details({ addToCart }: any) {
  const { id }: { id?: string } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

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
    navigate('/carrinho');
  };

  if (!product) {
    return <p>Carregando detalhes do produto...</p>;
  }

  const handleBackToInitialPage = () => {
    navigate('/');
  };

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
      <button
        data-testid="product-detail-add-to-cart"
        onClick={ () => addToCart(product) }
      >
        Adicionar ao Carrinho
      </button>
      <button onClick={ handleBackToInitialPage }>Voltar para a página inicial</button>
    </div>
  );
}

export default Details;
