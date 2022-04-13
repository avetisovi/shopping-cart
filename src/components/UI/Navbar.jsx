import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import apple from '../../images/apple-icon.svg'
import { CartContext } from '../../context'

import cartIcon from '../../images/cart.svg'

const NavBar = ({setCartActive}) => {
  const {cart} = useContext(CartContext) 
  const [cartQuantity, setCartQuantity] = useState(0)

  useEffect(() => {
    setCartQuantity(structuredClone(cart).reduce((a, b) => a + b.quantity, 0))
  }, [cart])
  
  return (
    <nav className='navigation'>
      <div className="container">
        <div className="navigation__inner">
          <Link className='navigation__logo' to='/'><img src={apple} alt="apple-icon" /></Link>
          <Link to='/'>home</Link>
          <Link to='/shop'>Shop</Link>
          <button
            className='cart__open'
            onClick={() => setCartActive(true)}
          >
            <img className='cart__icon' src={cartIcon} alt="cart" />
            { cartQuantity ? <sup className='cart__quantity'>{cartQuantity}</sup> : null} 
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar