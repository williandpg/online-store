// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { useNavigate } from 'react-router-dom';

function Carrinho({ cart }: any) {
  const navigate = useNavigate();

  function handleClickBack() {
    navigate(-1);
  }

  type Bypass = {
    thumbnail: any
    title: any
    quantity: any
    price: number
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      ) : (
        <section>
          {cart.map((item: Bypass) => (
            <div key={ item.title }>
              <img src={ item.thumbnail } alt="product" />
              <h3 data-testid="shopping-cart-product-name">
                {item.title}
              </h3>
              <h3 data-testid="shopping-cart-product-quantity">
                Quantidade:
                { item.quantity }
              </h3>
              <span>
                Valor do item:
                { item.price }
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
