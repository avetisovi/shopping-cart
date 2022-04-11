import React from 'react'
import BuyBtn from './BuyBtn'

const HompageCatalogItem = ({title, subtitle, img}) => {
  return (
    <div className='homepage__catalog-item'>
      <h3 className="homepage__catalog-item-title">{title}</h3>
      <p className="homepage__catalog-item-subtitle">{subtitle}</p>
      <BuyBtn/>
      <img className="homepage__catalog-item-img" src={img} alt={title} />
    </div>
  )
}

export default HompageCatalogItem