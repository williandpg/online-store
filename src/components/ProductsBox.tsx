export interface Product {
  id: string
  name: string
  thumbnail: string
  price: string
}

function ProductBox({ name, thumbnail, price }: Omit<Product, 'id'>) {
  return (
    <div data-testid="product">
      <img src={ thumbnail } alt={ `imagem de ${name}` } />
      <h2>{ price }</h2>
      <p>{ name }</p>
    </div>
  );
}

export default ProductBox;
