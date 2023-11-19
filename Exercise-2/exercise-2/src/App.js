import './App.css';
import Navbar from './myComponent/Navbar';
import Carousel from './myComponent/Carousel';
import Footer from './myComponent/Footer';
import Bestseller from './myComponent/Bestseller';
import Allproduct from './myComponent/Allproduct';
import Cart from './myComponent/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/Allproducts"
            element={<Allproduct />}>
          </Route>
          <Route path="/Cart"
          element={<Cart />}>
            
          </Route>
        </Routes>
        <Carousel />
        <Bestseller />
        <Footer />
    </>
  );
}

export default App;