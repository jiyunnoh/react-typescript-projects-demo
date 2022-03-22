import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

// Enter username and age. Add button to submit.
const AddUser = (props: { onAddUser: (arg0: string, arg1: string) => void }) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event: any) => {
        // when click the submit button, it prevents the request from being sent by default, and the page will not reload.
        // only request when we want. But here, we don't request.
        event.preventDefault();

        // trim() removes excess white space.
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event: any) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event: any) => {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
            <ErrorModal title="An error occured!" message="Something went wrong!" />
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