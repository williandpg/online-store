import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Carrinho() {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = location.state;

  function handleClickBack() {
    navigate(-1);
  }

  return (
    <div>
      {cart.length === 0 ? (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      ) : (
        <section>
          {cart.map((item: { thumbnail: string | undefined; title: string; quantity: number | null | undefined; price: number }) => (
           <div> 
            <img src={item.thumbnail} />
            <h3 data-testid="shopping-cart-product-name">{item.title} </h3>
            <h3 data-testid="shopping-cart-product-quantity">Quantidade: {item.quantity}</h3>
            <span>Valor do item: {item.price}</span>
           </div> 
          ))}
        </section>
      )}

      <button onClick={ handleClickBack }>Voltar</button>
    </div>

  );
}

export default Carrinho;
