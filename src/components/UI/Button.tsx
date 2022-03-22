import React from 'react';
import classes from './Button.module.css';

const Button = (props: {
    children?: React.ReactNode; 
    type?: 'button' | 'submit' | 'reset' | undefined; 
    onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}) => {
    return (
        <button
            className={classes.button}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;