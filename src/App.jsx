import './App.css';
import { useState } from 'react';
import { Products } from './Components/Products';
import { Header } from './Components/Header';
import { useFilters } from './hooks/useFilters.js';
import { products as initialProducts } from './mocks/products.json'
import { Footer } from './Components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'

function App() {
  const { filters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer/>}
    </>
  )
}

export default App
