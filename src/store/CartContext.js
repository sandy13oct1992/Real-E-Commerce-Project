import { createContext } from "react";

const CartContext = createContext({
    token:'',
    isLoggedIn:false,
    logIn:(token)=>{},
    logOut:() => {},
});

export default CartContext;

// token: '',
//     isLoggedIn:false,
//     login: (token) => {},
//     logout: () => {},