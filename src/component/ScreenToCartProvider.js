import { useContext } from "react";
import CartContext from "../store/CartContext";

const ScreenToCartProvider = (props) => {

    const { setTitle } = useContext(CartContext);

    const addToCartHandler = (e) => {
        e.preventDefault();

        const obj = {
            id: props.id,
            title: props.title,
            img: props.img,
            price: props.price
        }

        setTitle(obj);

    }

    return (
        <div>
            <button onClick={addToCartHandler}>Add To Cart</button>
        </div>
    )

}
export default ScreenToCartProvider;