import { useState, useRef, useContext } from "react"; 
import CartContext from "../store/CartContext";
const Authform = () => {
    const emailInputRef = useRef();
    const passInputRef = useRef();

 const [isLogin, setIsLogin]=useState(true);

 const authCtx = useContext(CartContext);

 const switchAuthModeHandler = () => {
   setIsLogin((prevState) => !prevState)
 }

 const submitHandler =(event) => {
  event.preventDefault();

  const emailref= emailInputRef.current.value;
  const passRef= passInputRef.current.value;
  let url;
  if(isLogin){
    authCtx.setEmail(emailref);
  url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyByjyq2al1UgTfogSSwWRxp4wLA2IBlUxc';
  }else{
    url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyByjyq2al1UgTfogSSwWRxp4wLA2IBlUxc';
   }fetch(url, {
    method:'POST',
    body:JSON.stringify({
        email:emailref,
        password:passRef,
        returnSecureToken:true
    }),
    headers:{
        'content-type':'application/json'
    }
 }).then((res) =>{
    if(res.ok){
     return res.json();
    }else{
        return res.json().then((data)=> {
            let errorMessage='Authentication Failed';
            alert(errorMessage);
            throw new Error(errorMessage);
        });
    }
 }).then((data) => {
    authCtx.logInHandler(data.idToken);
 })
 .catch((err) => {
    alert(err.message);
 })
  }
 
    return (
    <div>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
         <form onSubmit={submitHandler}>
            <div>
            <label htmlfor ='email' >Email ID</label>
            <input type='email' id='email' required ref={emailInputRef} />
            </div>
            <div>
            <label htmlfor ='password' >password</label>
            <input type='password' id='password' required ref={passInputRef}/>
            </div>

            <div>
                <button>{isLogin ? 'Login' : 'Create Account'}</button>
                <button type='button' onClick={switchAuthModeHandler}>
                    {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
            </div>
         </form>
    </div>
    )
}

export default Authform;