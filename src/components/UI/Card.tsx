// Not like regular css, when use module, need to import something.
import React from 'react';
import classes from './Card.module.css';

const Card = (props: { className: string; children: React.ReactNode; }) => {
    // ``: template literal(backticks) string + variable
    // ${}: dynamic variables
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
}

export default Card;