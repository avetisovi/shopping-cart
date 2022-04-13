import React, { useState, useContext, useEffect } from 'react'
import { ProductsContext } from '../context'
import ShopCategories from '../components/Shop/ShopCategories'
import ShopProducts from '../components/Shop/ShopProducts'

const Shop = () => {

  const {products} = useContext(ProductsContext)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [prodctsFilterMethod, setProdctsFilterMethod] = useState('all')
  
  useEffect(() => {
    if (prodctsFilterMethod === 'all') {
      setFilteredProducts(Object.values(structuredClone(products)).flat(1))
    } else {
      setFilteredProducts(structuredClone(products)[prodctsFilterMethod])
    }
  }, [prodctsFilterMethod])
  return (
    <div className="shop">
      <ShopCategories setProdctsFilterMethod={setProdctsFilterMethod}/>
      <ShopProducts filteredProducts={filteredProducts}/>
      
    </div>
  )
}

export default Shop