import logo from './logo.svg';
import './App.css';
import ScreenProduct from './component/ScreenProduct';
import { useState } from 'react';
import Cart from './component/Cart.js';

function App() {
  const [isShowCart, setShowCart]=useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    <div>
      <ScreenProduct onShowCart={showCartHandler} />
      {isShowCart && <Cart onClose= {hideCartHandler}/>}
    </div>
  );
}

export default App;
