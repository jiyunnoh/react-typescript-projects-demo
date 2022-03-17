// Not like regular css, when use module, need to import something.
import classes from './Card.module.css';

const Card = (props: any) => {
    // ``: template literal(backticks)
    // ${}: dynamic variables
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
}

export default Card;