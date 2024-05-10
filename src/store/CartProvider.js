import CartContext from "./CartContext";
import { useState,useEffect} from "react";

const CartProvider = (props) => {
    const [Data, setData] =useState('');
    const [FormData, setFormData] =useState([]);
    
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const logInHandler = (token) => {
      setToken(token);
      localStorage.setItem('token', token)
    }

    const logOutHandler = () => {
      setToken(null);
      localStorage.removeItem('token');
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