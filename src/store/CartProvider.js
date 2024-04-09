import CartContext from "./CartContext";
import { useState} from "react";

const CartProvider = (props) => {
    const [Data, setData] =useState('');
    // const [price, setPrice] =useState('');
    // const [imgUrl, setImgUrl]=useState('');
    const submitCartHandler =(data) =>{
       setData((previousData) => {
        return(
            [...previousData, data]
        )
       })
    }
  console.log(Data);
 
    return(
        <>
        <CartContext.Provider value={{Data, submitCartHandler}}>{props.children}</CartContext.Provider>
        </>
    )
}
export default CartProvider;