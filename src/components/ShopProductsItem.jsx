import React from 'react'
import BuyBtn from './UI/BuyBtn'


const ShopProductsItem = ({ setActiveProduct, setModal, product }) => {
  return (
    <div
      className="shop__product"
      onClick={() => {
        setActiveProduct(product);
        setModal(true)
      }}
    >
      <h3 className="shop__product-title">{product.title}</h3>
      <img className='shop__product-img' src={product.mainImg} alt={product.title} />
      <div className="shop__product-footer">
        <span className="shop__product-price">${product.price}</span>
        <BuyBtn />
      </div>
    </div>
  )
}

export default ShopProductsItem