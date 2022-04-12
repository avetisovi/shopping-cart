import './styles/index.scss'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Navbar from './components/UI/Navbar';
import { ProductsContext } from './context'
import Products from './Products';

function App() {
  const [products, setProducts] = useState(Products)
  return (
    <ProductsContext.Provider value = {{products, setProducts}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}

export default App;