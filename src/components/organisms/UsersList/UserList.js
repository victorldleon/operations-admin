import React, {useState, useEffect} from 'react';
import UserCard from '../../molecules/UserCard/UserCard';
const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

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
            .catch(error => {
                setError(error);
            });
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