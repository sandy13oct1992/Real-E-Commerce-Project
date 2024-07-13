import CartContext from "../store/CartContext";
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import "./screenProduct.css";

const productsArr = [
  {
    id: 0,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 1,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 2,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 3,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const ScreenProduct = (props) => {
  const { submitCartHandler, restoreCartHandler, Data, FormData, setData } = useContext(CartContext);

  const sanitizeEmail = (email) => {
    return email.replace(/\./g, ',');
  };

  const email = "user@example.com"; // Replace this with the actual email from props or context
  const sanitizedEmail = sanitizeEmail(email);

  const addToCartHandler = async (item) => {
    submitCartHandler(item);
    await axios.post(`https://e-commerce-27499-default-rtdb.firebaseio.com/${sanitizedEmail}/cart.json`, item);
  };

  const res = async () => {
    const resp2 = await axios.get(`https://e-commerce-27499-default-rtdb.firebaseio.com/${sanitizedEmail}/cart.json`);
    let products = Object.values(resp2.data);
    const productsKeys = Object.keys(resp2.data);

    products = products.map((pdata, index) => {
      pdata.id = productsKeys[index];
      return pdata;
    });

    restoreCartHandler(products);
  };

  useEffect(() => {
    res();
  }, []);

  let Totalitem = Data.length;

  return (
    <div>
      <Cartbutton onShow={props.onShowCart} />
      {FormData.map((fd) => (
        <div key={fd.id}>
          <h3>{fd.releaseDate}</h3>
          <h3>{fd.title}</h3>
          <h3>{fd.openingText}</h3>
        </div>
      ))}

      {productsArr.map((items) => (
        <div key={items.imageUrl} className="card">
          <h2>{items.title}</h2>
          <img src={items.imageUrl} alt={items.title} />
          <h3>${items.price}</h3>
          <button onClick={() => { addToCartHandler(items) }}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ScreenProduct;
