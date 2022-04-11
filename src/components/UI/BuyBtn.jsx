import React from 'react'
import { Link } from 'react-router-dom'

const BuyBtn = ({big}) => {

  return (
    <Link className={big ? 'buy__btn big' : 'buy__btn'} to='/shop'><span className='buy__btn-text'>Buy</span> {'>'}</Link>
  )
}

export default BuyBtn