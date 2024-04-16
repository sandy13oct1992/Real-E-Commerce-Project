import { useState } from "react";
import ScreenProduct from "./ScreenProduct"; 
import Cart from "./Cart";

const ShowCart = () => {
const [isShowCart, setShowCart]=useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    
      <div>
    
    {/* <RouterProvider router={router} /> */}
      <ScreenProduct onShowCart={showCartHandler} />
      {isShowCart && <Cart onClose= {hideCartHandler}/>}
       </div>
    
     
  );
}

export default ShowCart;