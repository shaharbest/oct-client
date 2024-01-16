import { useState } from "react";
import { products } from "../products";
import ProductCard from "./ProductCard";
import CatalogPagesLinks from "./CatalogPagesLinks";

const itemsPerPage = 6;

export default function Catalog() {
  const [searchedProducts, setSearchedProducts] = useState(products);
  const [curPageNum, setCurPageNum] = useState(1);
  const cards = getPageCards(curPageNum, searchedProducts);

  function handleSearch(str) {
    const result = products.filter(p => p.name.includes(str));
    setSearchedProducts(result);
  }

  const pagesCount = Math.ceil(searchedProducts.length / itemsPerPage);

  return <>
    <CatalogControls handleSearch={handleSearch} />
    <CatalogBoard cards={cards} />
    <CatalogPagesLinks selectedPageNum={curPageNum}
      onPageBtnClick={num => setCurPageNum(num)}
      pagesCount={pagesCount} />
  </>;
}

function CatalogControls({ handleSearch }) {
  const [inputVal, setInputVal] = useState('');

  return <div className="catalog-board-controls">
    <input type="text" value={inputVal}
      onChange={e => setInputVal(e.target.value)} />
    <button onClick={() => handleSearch(inputVal)}>
      search
    </button>
  </div>
}

function getPageCards(pageNum, allProducts) {
  const firstproductIndex =
    (pageNum - 1) * itemsPerPage;

  const pageProducts = allProducts.slice(firstproductIndex,
    firstproductIndex + itemsPerPage)

  return pageProducts.map(p =>
    <ProductCard key={p.id} product={p} />);
}

function CatalogBoard({ cards }) {
  return <div className="catalog-board">
    {cards}
  </div>
}