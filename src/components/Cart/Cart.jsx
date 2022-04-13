import React from 'react'
import CartHeader from './CartHeader';
import CartList from './CartList';
import CartFooter from './CartFooter';

const Cart = ({ cartActive, setCartActive }) => {
  const defaultClasses = ['cart'];
  if (cartActive) defaultClasses.push('active')
  return (
    <div className={defaultClasses.join(' ')}>
      <CartHeader setCartActive={setCartActive}/>
      <CartList />
      <CartFooter />
    </div>
  )
}

export default Cart