import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
}
const ModalOverLay= (props) =>{
    return(
        <div className={classes.modal}>
          <div className={classes.content}>{props.children}</div>
        </div>
      );
    // <div>{props.children}</div>)
};

const portalElement = document.getElementById("root1");
const Modal = (props) => {

    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverLay>{props.children}</ModalOverLay>, portalElement
            )}
        </Fragment>
    );
};
export default Modal;