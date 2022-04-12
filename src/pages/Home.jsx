import React from 'react'
import uniqid from 'uniqid'

import HompageCatalogItem from '../components/UI/HompageCatalogItem'
import BuyBtn from '../components/UI/BuyBtn'

import iphone13 from '../images/iphone13.jpg'
import iphonese from '../images/iphonese.webp'
import air from '../images/air.png'
import ipad from '../images/ipad.jpg'
import watch from '../images/watch.jpg';
import display from '../images/products/studioDisplay/1.png';
import studio from '../images/products/macStudio/1.png';
import airpods from '../images/airpods.webp';

const Home = () => {
  const catalogItems = [
    {title: 'WATCH', subtitle: "It's our largest display yet.", img: watch},
    {title: 'Studio Display', subtitle: "A sight to be bold.", img: display},
    {title: 'Mac Studio', subtitle: "Empower station.", img: studio},
    {title: 'AirPods', subtitle: "A magical connection to your devices.", img: airpods},
  ];

  return (
    <div className='homepage'>
      <section className="intro">
        <div className="container small">
          <div className="intro__inner">
            <div className="intro__item">
              <h2 className="intro__item-title">iPhone 13 Pro</h2>
              <p className="intro__item-subtitle">Oh. So. Pro</p>
              <BuyBtn big={true} />
              <img src={iphone13} alt="iPhone 13" className="intro__item-img" />
            </div>
            <div className="intro__item">
              <p className="intro__item-suptitle">The new</p>
              <h2 className="intro__item-title">iPhone SE</h2>
              <p className="intro__item-subtitle">Love is power. Love the price</p>
              <BuyBtn big={true} />
              <img src={iphonese} alt="iPhone SE" className="intro__item-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="ipad">
        <div className="container small">
          <div className="ipad__inner">
            <div className="ipad__content">
              <h2 className='ipad__title'>
                <span className='ipad__title-text'>iPad</span>
                <img className='ipad__title-icon' src={air} alt="air" />
              </h2>
              <p className="ipad__subtitle">Light. Bright. Full of might.</p>
              <BuyBtn big={true} />
            </div>
            <img src={ipad} alt="iPad air" />
          </div>
        </div>

      </section>

      <section className="homepage__catalog">
        {catalogItems.map (elem => <HompageCatalogItem {...elem} key={uniqid()}/>)}
      </section>
    </div>
  )
}

export default Home