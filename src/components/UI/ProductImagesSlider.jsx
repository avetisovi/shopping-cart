import React, { useState } from 'react'
import uniqid from 'uniqid'

const ProductImagesSlider = ({ images }) => {
  const [scroll, setScroll] = useState(0);

  const scrollLeft = () => {
    if (scroll === 0) {
      setScroll((images.length - 1) * -364)
    } else {
      setScroll(scroll + 364)
    }
  }
  const scrollRight = () => {
    if (scroll <= (images.length - 1) * -364) {
      setScroll(0)
    } else {
      setScroll(scroll - 364)
    }
  }

  const scrollTo = i => {
    setScroll(i * -364)
  }
  return (
    <div className='product__modal-slider'>
      <div className="product__modal-slider-container">
        <div style={{ left: scroll }} className="product__modal-slider-images">
          {images.map(img => <img key={uniqid()} className='product__modal-slider-img' src={img} alt="Overview" />)}
        </div>
      </div>
      <ul className="product__modal-slider-dots">
        {images.map((_, i) => {
          let active = ''
          if (scroll / -364 === i) active = 'active'; 
          return (
          <li onClick={() => scrollTo(i)} key={uniqid()} className={`product__modal-slider-dot ${active}`}>
            <button></button>
          </li>
        )})}
      </ul>
      <svg
        onClick={scrollLeft}
        className='product__modal-slider-arrow left'
        viewBox="0 0 96 96"
      >
        <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
      </svg>
      <svg
        onClick={scrollRight}
        className='product__modal-slider-arrow right'
        viewBox="0 0 96 96"
      >
        <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
      </svg>
    </div>
  )
}

export default ProductImagesSlider