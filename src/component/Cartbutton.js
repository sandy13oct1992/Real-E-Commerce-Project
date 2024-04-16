import classes from './Cartbutton.module.css';
import CartIcon from './CartIcon';
import {useContext} from "react";
import CartContext from '../store/CartContext';

const Cartbutton = (props) => {
     const {Data} = useContext(CartContext);
     let totalitem = Data.length;
    return(
        <div>
            <button  className={classes.button} onClick={props.onShow}>
             <span className={classes.icon}>
                <CartIcon/>
             </span>
             <span>Your Cart</span>

             <span className={classes.badge}>{totalitem}</span>
            </button>
        </div>
    )

}
export default Cartbutton;
