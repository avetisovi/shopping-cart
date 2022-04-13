import React, { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../../context';

const CartList = () => {
  const { cart } = useContext(CartContext);
  
  return (
    <ul>
      <ul className="cart__list">
        {!cart.length
          ? 'You cart is empty!'
          : cart.map(item => <CartItem key={item.id} item={item} />)}
      </ul>
    </ul>
  )
}

export default CartList