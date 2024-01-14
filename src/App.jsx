import { Route, Routes } from "react-router-dom";

export default function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Catalog />} />
      <Route path='/products/:id' element={<ProductPage />} />
    </Routes>
  </>
}

function  Home() {
  return 'home';
}

function  Catalog() {
  return 'catalog';
}

function  ProductPage() {
  return 'product page';
}