import React, {useState, useEffect, useContext} from 'react'
import { CartContext } from '../../context'

const CartItemCounter = ({productId}) => {
  const {cart, setCart, removeFromCart} = useContext(CartContext)
  const cartItem = cart.find(item => item.id === productId)
  const [quantity, setQuantity] = useState(cartItem.quantity)

  useEffect(() => {
    if (cartItem.quantity !== quantity) setQuantity(cartItem.quantity)
  }, [cart])

  useEffect(() => {
    if (quantity < 1) {
      removeFromCart(productId)
    } else {
      const clonedCart = structuredClone(cart);
      clonedCart.find(item => item.id === productId).quantity = quantity;
      setCart(clonedCart)
    }
  }, [quantity])

  return (
    <div className='cart__item-counter'>
      <button className="cart__item-decrement" onClick={() => setQuantity(quantity - 1)}>-</button>
      <input value={quantity} onChange={e => setQuantity(e.target.value)} type="text" className="cart__item-quantity" />
      <button className="cart__item-increment" onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  )
}

export default CartItemCounter