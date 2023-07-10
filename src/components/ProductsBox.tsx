export interface Product {
  id: string
  title: string
  thumbnail: string
  price: string
  quantity: number
}

function ProductBox({ title, thumbnail, price }: Omit<Product, 'id'>) {
  return (
    <div data-testid="product">
      <img src={ thumbnail } alt={ `imagem de ${title}` } />
      <h2>{ price }</h2>
      <p>{ title }</p>
    </div>
  );
}

export default ProductBox;
