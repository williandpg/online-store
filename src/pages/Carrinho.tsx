import addProductToCart from './Home';

function Carrinho() {
  const carItens = addProductToCart();

  return (
    <div data-testid="shopping-cart-empty-message">
      Seu carrinho está vazio
    </div>
  );
}

export default Carrinho;
