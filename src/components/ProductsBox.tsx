function ProductBox(productName: string, productImage: string, productPrice: string) {
  return (
      <button>
        <img src={productImage} alt={`imagem de ${productName}`} />
        <h2>{productPrice}</h2>
        <p>{productName}</p>
      </button>
  );
}

export default ProductBox;
