import React from 'react'
import xIcon from '../../images/x.svg'

const CartHeader = ({setCartActive}) => {
  return (
    <div className="cart__header">
        <h2 className="cart__title">Your shopping cart</h2>
        <button className="cart__close" onClick={() => setCartActive(false)}>
          <img src={xIcon} alt="x" />
        </button>
      </div>
  )
}

export default CartHeader