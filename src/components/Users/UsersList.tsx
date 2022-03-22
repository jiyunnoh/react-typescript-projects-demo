import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props: { users: { name: string; age: number; id: number; }[]}) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user: {name: string; age: number; id: number}) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul >
        </Card>
    )
}

export default UsersList;