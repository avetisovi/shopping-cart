import React, {useState} from 'react'
import ShopProductsItem from './ShopProductsItem'
import ProductModal from '../UI/ProductModal'

const ShopProducts = ({filteredProducts}) => {
  const [activeProduct, setActiveProduct] = useState({});
  const [modal, setModal] = useState(false)
  return (
    <div className='shop__products'>
      {filteredProducts.map(product => (
        <ShopProductsItem key={product.id} {...{setActiveProduct, setModal, product}}/>
      ))}
      <ProductModal  product={activeProduct} {...{modal, setModal}}/>
    </div>
  )
}

export default ShopProducts