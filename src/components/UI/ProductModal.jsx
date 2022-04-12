import React from 'react'
import ProductImagesSlider from './ProductImagesSlider'
import uniqid from 'uniqid'
import BuyBtn from './BuyBtn'

const ProductModal = ({ product, modal, setModal }) => {
  const classes = ['product__modal'];
  if (modal) classes.push('active')
  if (!modal) return null
  return (
    <div
      className={classes.join(' ')}
      onClick={e => {
        e.stopPropagation()
        setModal(false)
      }}
    >
      <div className="product__modal-wrapper">
        <div
          className="product__modal-container"
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <ProductImagesSlider images={product.allImages} />
          <div className="product__modal-content">
            <h3 className="product__modal-title">{product.title}</h3>
            <div className="product__modal-subtitle">
            <p className="product__modal-price">${product.price}</p>
            <BuyBtn />
            </div>
            <ul className="product__modal-advantages">
              {product.advantages.map(adv => <li key={uniqid()} className='product__modal-advantage'>{adv}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductModal