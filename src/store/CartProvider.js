import CartContext from "./CartContext";
import { useState,useEffect} from "react";

const CartProvider = (props) => {
    const [Data, setData] =useState('');
    const [FormData, setFormData] =useState([]);
    
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const [emailr, setEmail] = useState('')

    const userIsLoggedIn = !!token;

    const logInHandler = (token) => {
      setToken(token);
      localStorage.setItem('token', token)
    }

    const logOutHandler = () => {
      setToken(null);
      localStorage.removeItem('token');
    }
   
    setTimeout(() => {
      logOutHandler()
    },50000);
    // const contextValue = {
    //     token:token,
    //     isLoggedIn:userIsLoggedIn,
    //     login:logInHandler,
    //     logout: logOutHandler,
    // }
    // const [imgUrl, setImgUrl]=useState('');
    const restoreCartHandler = (cartdata) => {
      setData(cartdata)
    }

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
        <CartContext.Provider value={{emailr,setEmail,restoreCartHandler,logInHandler,logOutHandler,token,setToken,userIsLoggedIn ,Data, formShowHandler,submitCartHandler,FormData,setFormData,setData}}>{props.children}</CartContext.Provider>
        </>
    )
}
export default CartProvider;