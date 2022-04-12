import React, {useState} from 'react'
import uniqid from 'uniqid'

import categoryMac from '../images/categories/mac.png'
import categoryIphone from '../images/categories/iphone.png'
import categoryIpad from '../images/categories/ipad.png'
import categoryWatch from '../images/categories/watch.png'
import categoryAirPods from '../images/categories/airpods.png'
import categoryAccessories from '../images/categories/accessories.png'

const ShopCategories = ({ setProdctsFilterMethod }) => {
  const [categories] = useState([
    { title: 'Mac', img: categoryMac, filter: 'mac', active: '' },
    { title: 'iPhone', img: categoryIphone, filter: 'iphone', active: '' },
    { title: 'iPad', img: categoryIpad, filter: '', active: '' },
    { title: 'Apple Watch', img: categoryWatch, filter: '', active: '' },
    { title: 'AirPods', img: categoryAirPods, filter: '', active: '' },
    { title: 'Accessories', img: categoryAccessories, filter: '', active: '' },
  ])


  return (
    <ul className="shop__categories">
      {categories.map(item => (
        <li
          key={uniqid()}
          className= {`shop__category ${item.active}`}
          onClick={e => {
            categories.forEach(category => category.active = '');
            item.active = 'active';
            setProdctsFilterMethod(item.filter)
          }}
        >
          <img src={item.img} alt={item.title} className="shop__category-img" />
          <h4 className="shop__category-title">{item.title}</h4>
        </li>
      ))}
    </ul>
  )
}

export default ShopCategories