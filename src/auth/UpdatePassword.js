import {useRef, useContext} from 'react';
import CartContext from '../store/CartContext';

const UpdatePassword = () => {
  const newPasswordInputRef = useRef();

  const authCtx = useContext(CartContext);

  const submitHandler = (event) => {
   event.preventDefault();

   const enteredNewPassword = newPasswordInputRef.current.value;
     
   fetch('https:https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCYqSjodAfJhBFBQoalLAH7wm5RJn_nQ-U',
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
                <label>Password</label>
                <input type ='password' id='new-password' minLength='7' ref={newPasswordInputRef}/>
            </div>
            <div>
                <button onClick={submitHandler}>Change Password</button>
            </div>
        </form>
    )
} 
export default UpdatePassword;