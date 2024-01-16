import { useState } from "react";
import { products } from "../products";
import ProductCard from "./ProductCard";

const itemsPerPage = 6;

export default function Catalog() {
  const [curPageNum, setCurPageNum] = useState(1);

  const firstIndex = (curPageNum - 1) * itemsPerPage;
  const secondIndex = firstIndex + itemsPerPage;

  const productsCards =
    products.slice(firstIndex, secondIndex)
      .map(p => <ProductCard key={p.id} product={p} />);

  return <>
    <div className="catalog-board">
      {productsCards}
    </div>
    <CatalogPagesLinks selectedPageNum={curPageNum}
      products={products} onPageBtnClick={num => setCurPageNum(num)} />
  </>;
}

function CatalogPagesLinks({ selectedPageNum, products, onPageBtnClick }) {
  const pagesCount = Math.ceil(products.length / itemsPerPage);
  const pagesBtns = [];

  for (let i = 0; i < pagesCount; i++) {
    pagesBtns.push(<button key={i}
      style={{ backgroundColor: (i + 1 === selectedPageNum) ? 'red' : '' }}
      onClick={() => onPageBtnClick(i + 1)}>
      {i + 1}
    </button>);
  }

  return <div className="pages-links">
    {pagesBtns}
  </div>;
}