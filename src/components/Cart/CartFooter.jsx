import React, {useContext, useState, useEffect} from 'react'
import { CartContext } from '../../context';


const CartFooter = () => {
  const { cart } = useContext(CartContext);
  const [totalSum, setTotalSum] = useState(cart.reduce((a, b) => a + (b.quantity * b.price), 0));

  useEffect(() => {
    setTotalSum(cart.reduce((a, b) => a + (b.quantity * b.price), 0))
  }, [cart])

  if (!cart.length) return null;

  return (
    <div className='cart__footer'>
      <p className="cart__total">total: ${totalSum}</p>
      <button className="cart__checkout">Checkout</button>
    </div>
  )
}

export default CartFooter