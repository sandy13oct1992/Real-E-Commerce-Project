import { Fragment, useContext, useState } from "react";
import ReactDOM from "react-dom";
import './Cart.css';
import React from "react";
import CartContext from "../store/CartContext";
const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    
const Cart =(props) => {
   const [title, setTitle] = useState();
   const [openingText, setOpeningText]=useState();
   const [releaseDate, setReleaseDate] = useState();

    const {Data} = useContext(CartContext);
    const {formShowHandler} =useContext(CartContext);

    const TitleChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const OpeningTextHandler = (e) => {
        setOpeningText(e.target.value)
    }

    const RDateChangeHandler = (e) => {
        setReleaseDate(e.target.value)
    }
  
   
    const submitFormHandler = (e) => {
        e.preventDefault();
        const obj={ 
            title :title,
            openingText:openingText,
            releaseDate:releaseDate,
            id:new Date().getTime(),
    
        }
        formShowHandler(obj);

    }
    
let quantity = Data.length;

return ReactDOM.createPortal(
<>
  <div className="CContainer">
    <div className="Cart-Box">
    <button onClick={props.onClose}>X</button>
    {/* <form onSubmit=submit></form> */}
    <label>Title</label><br/>
    <input type="text" value={title} onChange={TitleChangeHandler} /><br/>
    <label>Opening Text</label><br/>
    <textarea id="paragraph" name="paragraph" rows="5" cols="50" value={openingText} onChange={OpeningTextHandler}></textarea><br/>
    <label>Release Date</label><br/>
    <input type="text" value={releaseDate} onChange={RDateChangeHandler}/><br/>
    <label>qauntity: {quantity}</label>
    <button onClick={submitFormHandler}>Add Form</button>

    {Data.map((ele) => (
    <div key={ele.title}>
        <li>{ele.title}</li>
        <ul>{ele.imageUrl}</ul>
        <ul>{ele.price}
        </ul>
        
    </div>
))}
    
    </div>
    </div>
</>, document.getElementById("root1")
);

};
export default Cart;