import React from 'react'
import uniqid from 'uniqid'

const ShopProducts = ({filteredProducts}) => {
  return (
    <div className='shop__products'>
      {filteredProducts.map(product => (
        <div key={uniqid()} className="shop__product">
          <h4 className="shop__product-title">{product.title}</h4>
        </div>
      ))}
    </div>
  )
}

export default ShopProducts