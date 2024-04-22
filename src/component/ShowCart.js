import { useState } from "react";
import ScreenProduct from "./ScreenProduct"; 
import Cart from "./Cart";

const ShowCart = () => {
const [isShowCart, setShowCart]=useState(false);
const [isLoading, setIsLoading]=useState(false)

  const showCartHandler = () => {
    setShowCart(true);
    setIsLoading(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    
      <div>
    
    {/* <RouterProvider router={router} /> */}
      <ScreenProduct onShowCart={showCartHandler} />
      {isLoading && <p>Loading.....</p>}
      {isShowCart && <Cart onClose= {hideCartHandler}/>}
      
       </div>
    
     
  );
}

export default ShowCart;