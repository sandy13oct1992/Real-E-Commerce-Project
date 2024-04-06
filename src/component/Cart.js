import { Fragment } from "react";
import ReactDOM from "react-dom";
import './Cart.css';
import React from "react";
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

return ReactDOM.createPortal(
<>
  <div className="CContainer">
    <div className="Cart-Box">
    <button onClick={props.onClose}>X</button>
    <label>Sandeep</label>
    <input type="text" />
    {cartElements.map((ele) => (
    <div key={ele.title}>
        <li>{ele.title}</li>
        <ul>{ele.imageUrl}</ul>
        <ul>{ele.price}
        </ul>
        <ul>{ele.price}</ul>
    </div>
))}
    
    </div>
    </div>
</>, document.getElementById("root1")
);

};
export default Cart;