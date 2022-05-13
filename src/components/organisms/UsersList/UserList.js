import React, {useState, useEffect} from 'react';
import UserCard from '../../molecules/UserCard/UserCard';
const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://react-hooks-8fca3-default-rtdb.firebaseio.com/users.json')
            .then(response => response.json())
            .then(data => {
                const users = Object.keys(data).map(key => ({
                    ...data[key],
                    id: key
                }));
                setUsers(users);
            })
    }, []);

    return (
        <div>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};
export default UsersList;