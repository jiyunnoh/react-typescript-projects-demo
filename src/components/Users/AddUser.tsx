import React, { useRef, useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

// Enter username and age. Add button to submit.
const AddUser = (props: { onAddUser: (username: string, age: string) => void }) => {
    // ref value is always an object which always has a current prop.
    // The current prop holds the actual value that ref is connected with.
    // By default, the value is undefined.
    const nameInputRef = useRef<null | HTMLInputElement>(null);
    const ageInputRef = useRef<null | HTMLInputElement>(null);

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState<{ title: string; message: string; } | null>();

    const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
        // when click the submit button, it prevents the request from being sent by default, and the page will not reload.
        // only request when we want. But here, we don't request.
        event.preventDefault();

        if (nameInputRef.current && ageInputRef.current) {
            console.log(nameInputRef.current.value);
            const enteredName = nameInputRef.current.value;
            const enteredUserAge = ageInputRef.current.value;

            // trim() removes excess white space.
            if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
                setError({
                    title: 'Invalid input',
                    message: 'Please enter a valid name and age (non-empty values).'
                });
                return;
            }
            if (+enteredUserAge < 1) {
                setError({
                    title: 'Invalid age',
                    message: 'Please enter a valid age (> 0).'
                });
                return;
            }
            props.onAddUser(enteredName, enteredUserAge);
            // setEnteredUsername('');
            // setEnteredAge('');
            nameInputRef.current.value = '';
            ageInputRef.current.value = '';
        }
    }

    // const usernameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setEnteredAge(event.target.value);
    // }

    const errorHandler = () => {
        setError(null);
    }

    return (
        // won't be rendered to DOM.
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            {/* have to have 'className' prop in Card. */}
            <Card className={classes.input}>
                {/* If add parentheses, it will execuete when line 11 is parsed. */}
                <form onSubmit={addUserHandler}>
                    {/* 'for' is already assigned in JavaScript. Instead, use 'htmlFor' */}
                    {/* 'for' is used in labels. It refers to the id of the element this label is associated with */}
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        // value={enteredAge}
                        // onChange={ageChangeHandler} 
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;

        // #1
        // turn it into javascript array.
        // {} makes it possible to run basic JavaScript expressions in JSX code.
        // but this is no longer JSX, so doesn't need {} wrapping ErrorModal.

        // #2
        // key="error-modal" <ErrorModal>
        // key="add-user-card" <Card>

        // [
        //     error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />,
        //     /* have to have 'className' prop in Card. */
        //     <Card className={classes.input}>
        //         {/* If add parentheses, it will execuete when line 11 is parsed. */}
        //         <form onSubmit={addUserHandler}>
        //             {/* 'for' is already assigned in JavaScript. Instead, use 'htmlFor' */}
        //             {/* 'for' is used in labels. It refers to the id of the element this label is associated with */}
        //             <label htmlFor="username">Username</label>
        //             <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        //             <label htmlFor="age">Age (Years)</label>
        //             <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        //             <Button type="submit">Add User</Button>
        //         </form>
        //     </Card>
        // ]