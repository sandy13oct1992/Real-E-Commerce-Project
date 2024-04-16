import { Route, Routes } from "react-router-dom";
import Home from "../page.js/Home";
import About from "../page.js/About";
import ScreenProduct from "../component/ScreenProduct";
import ShowCart from "../component/ShowCart";
const Myroutes = () => {
return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Screen' element={<ShowCart/>}/>


    
    </Routes>
)
}
export default Myroutes;

// //<Routes>
// <Route path="/book/:event-name/:id" element={<Book />} />
// <Route path="*" element={<NotFound />} />
// </Routes>