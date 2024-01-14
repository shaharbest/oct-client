import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  return <>
    <nav>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/products'>catalog</Link>
        </li>
      </ul>
    </nav>
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