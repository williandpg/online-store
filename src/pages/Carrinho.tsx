import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../components/ProductsBox';

function Carrinho() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Product[]>([]);

  function handleClickBack() {
    navigate(-1);
  }

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('chosenProduct') as string);
    setCart(products);
  }, []);

  return (
    <div>
      {cart.length === 0 ? (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      ) : (
        <section>
          {cart.map((product) => (
            <div key={ product.id }>
              <img src={ product.thumbnail } alt={ product.title } />
              <h3 data-testid="shopping-cart-product-name">
                {product.title}
              </h3>
              <h3 data-testid="shopping-cart-product-quantity">
                Quantidade:
                {product.quantity}
              </h3>
              <span>
                Valor do item:
                {product.price}
              </span>
            </div>
          ))}
        </section>
      )}

      <button onClick={ handleClickBack }>Voltar</button>
    </div>

  );
}

export default Carrinho;
