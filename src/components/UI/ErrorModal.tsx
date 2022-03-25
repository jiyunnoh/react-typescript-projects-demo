import React from "react";
// bring React logic into the browser. Enables that React and DOM are compatible.
// any name you want.
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

// can be stored in another file and import it if want it to be reusable.
const Backdrop = (props: { onConfirm: () => void; }) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props: { title: string; message: string; onConfirm: () => void; }) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props: { title: string; message: string; onConfirm: () => void; }) => {
    return (
        <React.Fragment>
            {/* createPortal() take 2 args; react node, pointer where it should be rendered in DOM  */}
            {/* It will be rendered in the same position no matter where you import it. */}
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                // ! nullcheck (typescript)
                document.getElementById('backdrop-root')!
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm} 
                />,
                document.getElementById('overlay-root')!
            )}

        </React.Fragment>
    );
}

export default ErrorModal;