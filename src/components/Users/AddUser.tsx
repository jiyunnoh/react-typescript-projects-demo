// Enter username and age. Add button to submit.
const AddUser = () => {
    const addUserHandler = (event: any) => {
        // when click the submit button, it prevents the request from being sent by default, and the page will not reload.
        // only request when we want.
        event.preventDefault();
    }

    return (
        // If add parentheses, it will execuete when line 11 is parsed.
        <form onSubmit={addUserHandler}>
            {/* 'for' is already assigned in JavaScript. Instead, use 'htmlFor' */}
            {/* 'for' is used in labels. It refers to the id of the element this label is associated with */}
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" />
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser;