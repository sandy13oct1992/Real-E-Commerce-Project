import logo from './logo.svg';
import {BrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import ScreenProduct from './component/ScreenProduct';
import { useState } from 'react';
import Cart from './component/Cart.js';
import About from './page.js/About.js';
import Home from './page.js/Home.js';
import Header from './component/Header.js';
import Myroutes from './Routes/Routes.js';
import Movies from './component/Movies';



function App() {
  
  return (
    
      <div>
    <Header />
    <Myroutes/>
    
    {/* <RouterProvider router={router} /> */}
      {/* <ScreenProduct onShowCart={showCartHandler} />
      {isShowCart && <Cart onClose= {hideCartHandler}/>} */}
       </div>
    
     
  );
}

export default App;
