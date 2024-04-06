import { Fragment } from "react";
import ReactDOM from "react-dom";

const ModalOverLay= (props) =>{
    return( <div>{props.children}</div>)
};

const portalElement = document.getElementById("root1");
const Modal = (props) => {

    return(
        <Fragment>
            {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
        </Fragment>
    );
};
export default Modal;