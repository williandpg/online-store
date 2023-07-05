import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/carrinho');
  }
  return (
    <>
      <form>
        <input type="text" name="" id="" />
        <button type="submit">Enviar</button>
      </form>

      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>

      <div id="Produtos" />
      <button data-testid="shopping-cart-button" onClick={ handleClick }>Carrinho</button>
    </>
  );
}

export default Home;
