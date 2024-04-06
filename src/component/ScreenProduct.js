
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ];
    
    
const ScreenProduct = (props) => {

   
return(
  <div>
    <button onClick={props.onShowCart}> Cart</button>
  {productsArr.map((items) => (
    <div key={items.imageUrl}>
      <h2>{items.title}</h2>
     
      <img src={items.imageUrl} />
      <h3>${items.price}</h3>
    </div>  
  ))}

</div>
);
};
export default ScreenProduct;
