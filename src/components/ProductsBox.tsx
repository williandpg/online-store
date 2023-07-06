import { Product } from "../pages/home";

function ProductBox({ name, thumbnail, price}: Product) {
  return (
    <div data-testid="product">
      <img src={thumbnail} alt={`imagem de ${name}`} />
      <h2>{price}</h2>
      <p>{name}</p>
    </div>
  );
}

export default ProductBox;
