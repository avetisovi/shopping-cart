import React from 'react'
import CartItemCounter from './CartItemCounter'

const CartItem = ({item}) => {
  return (
    <li className='cart__item'>
            <img src={item.img} alt="" className="cart__item-img" />
            <div className="cart__item-content">
              <div className="cart__item-header">
                <h4 className="cart__item-title">{item.title}</h4>
                <p className="cart__item-price">${item.price}</p>
              </div>
              <CartItemCounter productId={item.id}/>
            </div>
          </li>
  )
}

export default CartItem