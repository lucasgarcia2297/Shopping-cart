import './Cart.css'
import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';
import { CartItem } from './CartItem';

export function Cart(){
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return(
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon/>
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden/>

      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem 
                key={product.id} 
                addToCart={() => addToCart(product)}
                {...product}
              // thumbnail={}
              // price={}
              // title={}
              // quantity={}
              // addToCart={addToCart}
          />
            ))
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon/>
        </button>
      </aside>
    </>
  );
}