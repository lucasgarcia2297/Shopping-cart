import './App.css';
import { Products } from './Components/Products';
import { Header } from './Components/Header';
import { useFilters } from './hooks/useFilters.js';
import { products as initialProducts } from './mocks/products.json'
import { Footer } from './Components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { Cart } from './Components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
