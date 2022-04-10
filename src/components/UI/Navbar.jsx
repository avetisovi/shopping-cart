import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../../images/cart.svg'
import apple from '../../images/apple-icon.svg'

const NavBar = () => {
  return (
    <nav className='navigation'>
      <div className="container">
        <div className="navigation__inner">
          <Link className='navigation__logo' to='/'><img src={apple} alt="apple-icon" /></Link>
          <Link to='/'>home</Link>
          <Link to='/shop'>Shop</Link>
          <button
            className='cart__btn'
            onClick={() => { }}
          >
            <img className='cart__icon' src={cart} alt="cart" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar