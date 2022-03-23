import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props: { users: { name: string; age: number; id: number; }[]}) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user: {name: string; age: number; id: number}) => (
                    // map()을 쓸 때 항상 key가 있어야한다. 라고만 알고 있었는데, 더 정확히는
                    // map()은 key가 있든 말든 신경안씀. 에러를 발생하는건 react.
                    // 각각의 item을 렌더할 때마다 정확히 어떤 아이템이 업데이트 됐는지 react가 알아야 하기 때문에 unique한 key로 특정시켜줘야 하는 것.
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul >
        </Card>
    )
}

export default UsersList;