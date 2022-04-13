import './styles/index.scss'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Navbar from './components/UI/Navbar';
import { ProductsContext, CartContext } from './context'
import Products from './Products';
import Cart from './components/Cart/Cart';
import Error from './pages/Error';

function App() {
  const [products, setProducts] = useState(Products)
  const [cart, setCart] = useState([])
  const allProducts = Object.values(structuredClone(products)).flat(1);
  const [cartActive, setCartActive] = useState(false)

  const addToCart = id => {
    if (cart.find(product => product.id === id)) {
      let changedCart = cart.find(product => product.id === id);
      changedCart.quantity++;
      setCart([
        ...cart.filter(p => p.id !== id), 
        changedCart
      ]);
    } else {
      const newProduct = allProducts[allProducts.findIndex(product => product.id === id)]
      setCart([
        ...cart, 
        {
          id: newProduct.id,
          title: newProduct.title,
          price: newProduct.price,
          quantity: 1,
          img: newProduct.mainImg
        }
      ])
    }
  }

  const removeFromCart = id => {
    let clonedCart = structuredClone(cart)
    clonedCart = clonedCart.filter(item => item.id !== id);
    setCart(clonedCart)
  }

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <CartContext.Provider value={{cart, setCart, removeFromCart, addToCart}}>
        <BrowserRouter>
          <Navbar setCartActive={setCartActive}/>
          <Cart cartActive={cartActive} setCartActive={setCartActive}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;