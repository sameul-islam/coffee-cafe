import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoffeeProducts from './CoffeeProducts';
import Home from './pages/Home';
import Footer from './components/Footer';



const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white duration-200 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/coffeeproducts' element={<CoffeeProducts/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
