import { Route, Routes } from "react-router-dom";
import Home from "../page.js/Home";
import About from "../page.js/About";
import ScreenProduct from "../component/ScreenProduct";
import ShowCart from "../component/ShowCart";
import ContactUs from "../component/ContactUs";
import Authform from "../auth/Authform";
import UpdatePassword from "../auth/UpdatePassword";
const Myroutes = () => {
return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Screen' element={<ShowCart/>}/>
        <Route path='/Contact' element={<ContactUs/>}/>
        <Route path='/LoginForm' element={<Authform/>}/>
        <Route path='/UpdatePassword' element={<UpdatePassword/>}/>


    
    </Routes>
)
}
export default Myroutes;

// //<Routes>
// <Route path="/book/:event-name/:id" element={<Book />} />
// <Route path="*" element={<NotFound />} />
// </Routes>