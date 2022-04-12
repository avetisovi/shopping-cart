import React from 'react'
import uniqid from 'uniqid'
import BuyBtn from './UI/BuyBtn'

const ShopProducts = ({filteredProducts}) => {
  console.log(filteredProducts)
  return (
    <div className='shop__products'>
      {filteredProducts.map(product => (
        <div key={uniqid()} className="shop__product">
          <h3 className="shop__product-title">{product.title}</h3>
          <img className='shop__product-img' src={product.mainImg} alt={product.title} />
          <div className="shop__product-footer">
            <span className="shop__product-price">${product.price}</span>
            <BuyBtn />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShopProducts