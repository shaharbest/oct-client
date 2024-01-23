import { useState } from "react";
import { products } from "../products";
import CatalogPagesLinks from "./CatalogPagesLinks";
import CatalogBoard from "./CatalogBoard";
import { itemsPerPage } from "./constants";
import CatalogControls from "./CatalogControls";

export default function Catalog() {
  const [searchedProducts, setSearchedProducts] = useState(products);
  const [curPageNum, setCurPageNum] = useState(1);

  function handleSearch(str) {
    const result = products.filter(p =>
      p.name.includes(str));
    setSearchedProducts(result);
  }

  function handleSort(category) {
    const productsClone = [...products];

    switch (category) {
      case 'name':
        productsClone.sort((p1, p2) => p1.name.localeCompare(p2.name));
        break;
      case 'price':
        productsClone.sort((p1, p2) => p1.price - p2.price);
        break;
    }

    setSearchedProducts(productsClone);
  }

  const pagesCount = Math.ceil(searchedProducts.length / itemsPerPage);

  return <>
    <CatalogControls
      handleSort={handleSort}
      handleSearch={handleSearch} />
    <CatalogBoard products={searchedProducts} curPageNum={curPageNum} />
    <CatalogPagesLinks selectedPageNum={curPageNum}
      onPageBtnClick={num => setCurPageNum(num)}
      pagesCount={pagesCount} />
  </>;
}
