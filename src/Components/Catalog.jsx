import { Link } from "react-router-dom";
import { products } from "../products";

export default function Catalog() {
  const productsCards = products.map(p =>
    <ProductCard key={p.id} product={p} />);

  return <>
    <div className="catalog-board">
      {productsCards}
    </div>
  </>;
}

function ProductCard({ product }) {
  return <div className="product-card">
    <Link to={`/products/${product.id}`}>
      <h3>{product.name}</h3>
    </Link>
    <p>$ {product.price}</p>
  </div>
}
