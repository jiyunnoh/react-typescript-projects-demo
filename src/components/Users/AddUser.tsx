import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

// Enter username and age. Add button to submit.
const AddUser = (props: { onAddUser: (username: string, age: string) => void }) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState<{ title: string; message: string; } | null>();

    const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
        // when click the submit button, it prevents the request from being sent by default, and the page will not reload.
        // only request when we want. But here, we don't request.
        event.preventDefault();

        // trim() removes excess white space.
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            {/* have to have 'className' prop in Card. */}
            <Card className={classes.input}>
                {/* If add parentheses, it will execuete when line 11 is parsed. */}
                <form onSubmit={addUserHandler}>
                    {/* 'for' is already assigned in JavaScript. Instead, use 'htmlFor' */}
                    {/* 'for' is used in labels. It refers to the id of the element this label is associated with */}
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;