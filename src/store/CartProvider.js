import CartContext from "./CartContext";
import { useState,useEffect} from "react";

const CartProvider = (props) => {
    const [Data, setData] =useState('');
    const [FormData, setFormData] =useState([]);

    const [token, setToken] = useState(null);

    const userIsLoggedIn = !!token;

    const logInHandler = (token) => {
      setToken(token);
    }

    const logOutHandler = () => {
      setToken(null);
    }

    // const contextValue = {
    //     token:token,
    //     isLoggedIn:userIsLoggedIn,
    //     login:logInHandler,
    //     logout: logOutHandler,
    // }
    // const [imgUrl, setImgUrl]=useState('');
    const submitCartHandler =(data) =>{
       setData((previousData) => {
        return(
            [...previousData, data]
        )
       })
    }
    // const [fData, setFData]=useState('');
   const formShowHandler = (formData) => {
    setFormData((pfData) => {
        return(
            [...pfData, formData]
        )
    })
   }
  
    // setFData([...fData, FormData]);
  
  
  console.log(FormData);
 
    return(
        <>
        <CartContext.Provider value={{logInHandler,logOutHandler,token,setToken,userIsLoggedIn ,Data, formShowHandler,submitCartHandler,FormData,setFormData}}>{props.children}</CartContext.Provider>
        </>
    )
}
export default CartProvider;