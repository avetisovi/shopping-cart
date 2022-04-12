import React from 'react'
import { Link } from 'react-router-dom'

const BuyLink = ({big}) => {

  return (
    <Link className={big ? 'buy__link big' : 'buy__link'} to='/shop'><span className='buy__link-text'>Buy</span> {'>'}</Link>
  )
}

export default BuyLink