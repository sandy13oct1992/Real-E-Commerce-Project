import {useRef, useContext} from 'react';
import CartContext from '../store/CartContext';

const UpdatePassword = () => {
  const newPasswordInputRef = useRef();

  const authCtx = useContext(CartContext);

  const isLogedIn = authCtx.userIsLoggedIn;

  const submitHandler = (event) => {
   event.preventDefault();

   const enteredNewPassword = newPasswordInputRef.current.value;
     
   fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCYqSjodAfJhBFBQoalLAH7wm5RJn_nQ-U',
    {
        method:'POST',
        body:JSON.stringify({
            idToken:authCtx.token,
            password:enteredNewPassword,
            returnSecureToken:false
        }),
        headers:{
            'Content-Type':'application/json'
        }

    }
   )
  }
    return(
        <form>
            <div>
                <label>{isLogedIn && 'password'}</label>
             {isLogedIn &&   (<input type ='password' id='new-password' minLength='7' ref={newPasswordInputRef}/>)}
            </div>
            <div>
                <button onClick={submitHandler}>{isLogedIn && 'Change Password'}</button>
            </div>
        </form>
    )
} 
export default UpdatePassword;