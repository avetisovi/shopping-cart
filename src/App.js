import './styles/index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Navbar from './components/UI/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;