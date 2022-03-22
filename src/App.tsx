import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
    //TODO: any type
  const [usersList, setUsersList] = useState<any>([]);

  const addUserHandler = (uName: string, uAge: string) => {
    setUsersList((prevUsersList: []) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
