import { useContext } from "react";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../store/CartContext";
// import CartContext from "../Store/cart-context";
// import AuthContext from "../Store/auth-context";

const Header = () => {
  const cartCtx = useContext(CartContext);
  
  const isLogedIn = cartCtx.userIsLoggedIn;// const authCtx = useContext(AuthContext);

 

  const logouthandler = () => {
    cartCtx.logOutHandler();
  }

  return (
    <>
      <Navbar
        expand="md"
        className="navbar-dark border-2 sticky-top border-bottom bg-dark text-white"
      >
        <Container className="justify-content-center">
          <Nav className="gap-5">
          
            {isLogedIn && (
            <NavLink to="/" className="nav-link">
              <h6>Home</h6> 
            </NavLink>
            )}
            {!isLogedIn && (
            <NavLink to="/LoginForm" className="nav-link">
              <h6>Login form</h6> 
            </NavLink>)}

            {!isLogedIn && (
            <NavLink to="/LoginForm" className="nav-link">
             <h6>Home</h6> 
           </NavLink>)}   
            {/* <NavLink to="/store">
              <h6>Store</h6>
            </NavLink> */}
            {!isLogedIn && (
            <NavLink to="/LoginForm">
              <h6>About</h6>
            </NavLink>
            )}
            {isLogedIn && (
            <NavLink to="/about">
              <h6>About</h6>
            </NavLink>
            )}
            {isLogedIn && (
            <NavLink to="/Contact">
              <h6>Contact</h6>
             </NavLink>
            )}
            {isLogedIn && (
            <NavLink to="/Screen">
              <h6>Main Screen</h6>
            </NavLink>
          )}
          {isLogedIn && (
            <NavLink to="/UpdatePassword">
              <button>UpdatePassword</button>
            </NavLink>
             )}
          {isLogedIn && (
            <li>
              <button onClick={logouthandler}>logout</button>
              </li>
          )}
            {/* {!authCtx.isLogin && (
              <NavLink to="/login">
                <h6>Login</h6>
              </NavLink>
            )} */}
            {/* <NavLink to="/contact">
              <h6>Contact</h6>
            </NavLink> */}
          {/* </Nav>
        </Container> */}
        {/* <Button
          variant="outline-light"
          size="sm"
          data-bs-theme="dark"
          className="text-white me-2"
          onClick={cartCtx.toggleCart}
        >
          Cart {cartCtx.items.length}
        </Button> */}
      {/* </Navbar> */}
      {/* <div className="bg-opacity-75 bg-dark text-white">
        <Container key="title" className="text-center pb-5">
          <h1 className="" style={{ fontSize: "7vw" }}>
            The Generics
          </h1>
        </Container>
      </div> */}
      
    </Nav>
    </Container>
    </Navbar>
    </>
  );
};

export default Header;