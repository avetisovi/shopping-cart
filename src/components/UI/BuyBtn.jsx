import React, {useContext} from 'react'
import { CartContext } from '../../context'

const BuyBtn = ({productId}) => {
  const {addToCart} = useContext(CartContext)
  return (
    <button onClick={e => {
      e.stopPropagation();
      addToCart(productId);
    }} className='buy__btn'>Buy</button>
  )
}

export default BuyBtn