import CartContext from "../store/CartContext";
import { useContext, useEffect, useState } from "react";
// import ScreenToCartProvider from "./ScreenToCartProvider";
import Card from "./Card";
import CartIcon from "./CartIcon";
import Cartbutton from "./Cartbutton";

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
  const {submitCartHandler} = useContext(CartContext);
 
  const {Data} = useContext(CartContext);

  const {FormData} = useContext(CartContext);
   
  // const [fData, setFData]=useState();
   
  // useEffect(()=>{
  //   setFData([...fData, FormData]);
  // },[FormData,Data,submitCartHandler]);
  
   let Totalitem=Data.length;
   

  const addToCartHandler = (item) => {
    submitCartHandler(item);
   }
  
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
    <div key={items.imageUrl}>
      <h2>{items.title}</h2>
     
      <img src={items.imageUrl} />
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
