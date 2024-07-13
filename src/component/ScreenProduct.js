import CartContext from "../store/CartContext";
import React, { useContext, useEffect, useState } from "react";
// import ScreenToCartProvider from "./ScreenToCartProvider";
import Card from "./Card";
import CartIcon from "./CartIcon";
import Cartbutton from "./Cartbutton";
import axios from 'axios';
import "./screenProduct.css";
const productsArr = [

    {
    id:0,
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    id:1,
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    id:2,
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    id:3,
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ];
    
    
const ScreenProduct = (props) => {
  const {submitCartHandler, restoreCartHandler,emailr} = useContext(CartContext);
 
  const {Data} = useContext(CartContext);

  const {FormData} = useContext(CartContext);
   
  const {setData} =useContext(CartContext);
  // const [fData, setFData]=useState();
   
  // useEffect(()=>{
  //   setFData([...fData, FormData]);
  // },[FormData,Data,submitCartHandler]);
  // axios.get('https://react-http-6b09e-default-rtdb.firebaseio.com/cart.json')

  // const isEmpty= !!setData;
  const email = emailr;
  const sanitizeEmail = (email) => {
    return email.replace(/\./g, ',');
  };

  // const email = emailr; // Replace this with the actual email from props or context
  const sanitizedEmail = sanitizeEmail(email);
  
  
   let Totalitem=Data.length;
  

  const addToCartHandler = async(item) =>{
    submitCartHandler(item);
     const response = await axios.post('https://e-commerce3-30722-default-rtdb.firebaseio.com/cart.json',
      item
     )
    
   }
   const res=async() =>{ 
    const resp2=  await axios.get('https://e-commerce3-30722-default-rtdb.firebaseio.com/cart.json')
    let products =Object.values(resp2.data)
    console.log(products,"from line no. 85");
    const productsKeys =Object.keys(resp2.data)
    console.log(productsKeys, "from line no. 87");

    products=products.map((pdata,index) =>{
      pdata.id = productsKeys[index];
      return pdata;
   })
   console.log(products ,"updated cart data");
    restoreCartHandler(products);
  //   const resp3=await resp2.json();
  console.log(resp2, "from line no. 88");
  // }
  // res();
    }
   useEffect(() =>{
  //   const res=async() =>{ 
  //   const resp2=  await axios.get('https://react-http-6b09e-default-rtdb.firebaseio.com/cart.json')
  //   //  submitCartHandler(resp2)
  //   const resp3=await resp2.json();
  // console.log(resp3, "from line no. 82");
  // // }
  res();
    // }
},[])
   console.log(FormData);
return(
  <div>
    <Cartbutton onShow={props.onShowCart}/> 
    {FormData.map((fd) => (
     <div key={fd.id}>
      <h3>{fd.releaseDate}</h3>
      <h3>{fd.title}</h3>
      <h3>{fd.openingText}</h3></div>
    ))}
      
   {productsArr.map((items) => (
    <div key={items.imageUrl} className="card">
      <h2>{items.title}</h2>
     
      <img src={items.imageUrl} alt={items.title}/>
      <h3>${items.price}</h3>
      <button  onClick={() => {addToCartHandler(items)}}>Add to Cart</button>
    </div>  
  ))}

  {/* {productsArr.map((items) => (
    <ScreenToCartProvider 
    
    key={new Date().getTime()}
    id={new Date().getTime()}
    title={items.title}
    img={items.imageUrl}
    price={items.price}
   />
   ))}; */}
   
</div>
);
};
export default ScreenProduct;
