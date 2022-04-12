import mbaMain from '../images/products/macBookAir/main.jpg'
import mba1 from '../images/products/macBookAir/1.png'
import mba2 from '../images/products/macBookAir/2.png'
import mba3 from '../images/products/macBookAir/3.png'
import mba4 from '../images/products/macBookAir/4.png'
import mba5 from '../images/products/macBookAir/5.png'

import mbp13Main from '../images/products/macBookPro13/main.jpg'
import mbp13_1 from '../images/products/macBookPro13/1.png'
import mbp13_2 from '../images/products/macBookPro13/2.png'
import mbp13_3 from '../images/products/macBookPro13/3.png'
import mbp13_4 from '../images/products/macBookPro13/4.png'
import mbp13_5 from '../images/products/macBookPro13/5.png'

import mbp14Main from '../images/products/macBookPro14/main.jpg'
import mbp14_1 from '../images/products/macBookPro14/1.png'
import mbp14_2 from '../images/products/macBookPro14/2.png'
import mbp14_3 from '../images/products/macBookPro14/3.png'
import mbp14_4 from '../images/products/macBookPro14/4.png'
import mbp14_5 from '../images/products/macBookPro14/5.png'

import mbp16Main from '../images/products/macBookPro16/main.jpg'
import mbp16_1 from '../images/products/macBookPro16/1.png'
import mbp16_2 from '../images/products/macBookPro16/2.png'
import mbp16_3 from '../images/products/macBookPro16/3.png'
import mbp16_4 from '../images/products/macBookPro16/4.png'
import mbp16_5 from '../images/products/macBookPro16/5.png'

import iMac24Main from '../images/products/iMac24/main.jpg'
import iMac24_1 from '../images/products/iMac24/1.png'
import iMac24_2 from '../images/products/iMac24/2.png'
import iMac24_3 from '../images/products/iMac24/3.png'
import iMac24_4 from '../images/products/iMac24/4.png'
import iMac24_5 from '../images/products/iMac24/5.png'

import macStudioMain from '../images/products/macStudio/main.jpg'
import macStudio1 from '../images/products/macStudio/1.png'
import macStudio2 from '../images/products/macStudio/2.png'
import macStudio3 from '../images/products/macStudio/3.png'
import macStudio4 from '../images/products/macStudio/4.png'
import macStudio5 from '../images/products/macStudio/5.png'

import studioDisplayMain from '../images/products/studioDisplay/main.jpg'
import studioDisplay1 from '../images/products/studioDisplay/1.png'
import studioDisplay2 from '../images/products/studioDisplay/2.png'
import studioDisplay3 from '../images/products/studioDisplay/3.png'
import studioDisplay4 from '../images/products/studioDisplay/4.png'
import studioDisplay5 from '../images/products/studioDisplay/5.png'
import studioDisplay6 from '../images/products/studioDisplay/6.png'
import studioDisplay7 from '../images/products/studioDisplay/7.png'
import studioDisplay8 from '../images/products/studioDisplay/8.png'
import studioDisplay9 from '../images/products/studioDisplay/9.png'

import iphone13proMain from '../images/products/iphone13pro/main.jpg'
import iphone13pro1 from '../images/products/iphone13pro/1.png'
import iphone13pro2 from '../images/products/iphone13pro/2.png'
import iphone13pro3 from '../images/products/iphone13pro/3.png'
import iphone13pro4 from '../images/products/iphone13pro/4.png'
import iphone13pro5 from '../images/products/iphone13pro/5.png'
import iphone13pro6 from '../images/products/iphone13pro/6.png'

const Products = {
  mac: [
    {
      id: 1,
      title: 'MacBook Air',
      mainImg: mbaMain,
      allImages: [mba1, mba2, mba3, mba4, mba5],
      price: 999,
      advantages: [
        'Apple M1 chip delivers powerful CPU, GPU, and machine learning performance',
        'Up to 18 hours of battery life so you can go longer than ever',
        'Retina display with vibrant colors and incredible detail',
        'Superfast SSD storage opens apps and files in an instant',
        'Fanless design for silent operation'
      ],
    },
    {
      id: 2,
      title: 'MacBook Pro 13”',
      mainImg: mbp13Main,
      allImages: [mbp13_5, mbp13_1, mbp13_2, mbp13_3, mbp13_4],
      price: 1299,
      advantages: [
        'Apple M1 chip delivers powerful CPU, GPU, and machine learning performance',
        'Up to 20 hours of battery life',
        'Retina display with 500 nits of brightness for vibrant colors and incredible detail',
        'Superfast SSD storage opens apps and files in an instant'
      ],
    },
    {
      id: 3,
      title: 'MacBook Pro 14”',
      mainImg: mbp14Main,
      allImages: [mbp14_5, mbp14_1, mbp14_2, mbp14_3, mbp14_4],
      price: 1999,
      advantages: [
        'New Apple M1 Pro and M1 Max chips deliver incredible performance',
        'Up to 17 hours of battery life, thanks to the efficiency of Apple silicon',
        'Liquid Retina XDR display features extreme dynamic range and incredible contrast ratio',
        'New 1080p FaceTime HD camera, high-fidelity six-speaker sound system, and studio-quality mic array',
        'Thunderbolt 4, HDMI, SDXC, and MagSafe 3 for fast and versatile connectivity'
      ],
    },
    {
      id: 4,
      title: 'MacBook Pro 16”',
      mainImg: mbp16Main,
      allImages: [mbp16_5, mbp16_1, mbp16_2, mbp16_3, mbp16_4],
      price: 2499,
      advantages: [
        'New Apple M1 Pro and M1 Max chips deliver incredible performance',
        'Up to 21 hours of battery life, thanks to the efficiency of Apple silicon',
        'Liquid Retina XDR display features extreme dynamic range and incredible contrast ratio',
        'New 1080p FaceTime HD camera, high-fidelity six-speaker sound system, and studio-quality mic array',
        'Thunderbolt 4, HDMI, SDXC, and MagSafe 3 for fast and versatile connectivity'
      ],
    },
    {
      id: 5,
      title: 'iMac 24”',
      mainImg: iMac24Main,
      allImages: [iMac24_1, iMac24_2, iMac24_3, iMac24_4, iMac24_5],
      price: 1299,
      advantages: [
        'Apple M1 chip delivers powerful CPU, GPU, and machine learning performance',
        'Immersive 4.5K Retina display',
        'Strikingly thin 11.5 mm design in seven vibrant colors',
        '1080p FaceTime HD camera, high-fidelity six-speaker sound system, and studio-quality mic array',
        'Color-matched Magic Mouse and Magic Keyboard'
      ],
    },
    {
      id: 6,
      title: 'Mac Studio',
      mainImg: macStudioMain,
      allImages: [macStudio1, macStudio2, macStudio3, macStudio4, macStudio5],
      price: 1999,
      advantages: [
        'Extreme performance from the Apple M1 Max or M1 Ultra chip to unleash your creativity',
        'Stunningly compact design fits right on your desk',
        'A wide array of high-performance ports allows you to build the studio of your dreams',
        'Pairs perfectly with Studio Display — or up to four displays and one 4K TV for ultimate customization'
      ],
    },
    {
      id: 7,
      title: 'Studio Display',
      mainImg: studioDisplayMain,
      allImages: [
        studioDisplay1,
        studioDisplay2,
        studioDisplay3,
        studioDisplay4,
        studioDisplay5,
        studioDisplay6,
        studioDisplay7,
        studioDisplay8,
        studioDisplay9
      ],
      price: 1599,
      advantages: [
        '27-inch 5K Retina display draws you in with 14.7 million pixels and one billion colors',
        '12MP Ultra Wide camera with Center Stage — powered by Apple silicon — allows for more engaging video calls',
        'Three studio-quality mics and six-speaker sound system with Spatial Audio for more immersive calls, movies, and music',
        'With ports for connectivity and charging and three stand options, it fits any setup',
        'Pairs perfectly with any Mac, including the all-new Mac Studio. Add new matching Magic accessories to complete your studio.'
      ],
    },
  ],
  iphone: [
    {
      id: 8,
      title: 'iPhone 13 Pro',
      mainImg: iphone13proMain,
      allImages: [iphone13pro1, iphone13pro2, iphone13pro3, iphone13pro4, iphone13pro5, iphone13pro6],
      price: 999,
      advantages: [
        '6.1-inch Super Retina XDR display with ProMotion for a faster, more responsive feel',
        'Biggest Pro camera system upgrade ever for epic low-light shots and macro photography',
        'A15 Bionic with 5-core GPU — the fastest chip ever in a smartphone',
        'Ceramic Shield, tougher than any smartphone glass. And IP68 water resistance.',
        '5G for superfast downloads and high-quality streaming'
      ],
    },
  ]
};

export default Products;