import { Products } from './Components/Products';
import './App.css';
import { products } from './mocks/products.json'
function App() {

  return (
    <>
      <h1>Shopping cart</h1>
      <Products products={products} />
    </>
  )
}

export default App
