import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './New.css'

const NewClient = () => { 
    const [name, setName] = useState('');
    const [responsible, setResponsible] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const history = useHistory();
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
            .catch(error => {
                setError(error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const response = await fetch('https://react-hooks-8fca3-default-rtdb.firebaseio.com/clients.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    responsible
                })
            });
            const data = await response.json();
            if (data.error) {
                setError(data.error);
                console.log(error);
            } else {
                setSuccess(data.message);
                handleSuccess();
            }
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    };

    const handleSuccess = () => {
        setName('');
        history.push('/clients');
    };

    const loading = isLoading ? <div className='loading'><p>Loading...</p></div> : null;
    const errorMessage = error ? <div className='error'><p>{error}</p></div> : null;
    const successMessage = success ? <div className='success'><p>{success}</p></div> : null;
    
    return (
        <div>
            <h1>New Client</h1>
            {successMessage}
            {errorMessage}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter name" 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <small id="nameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="responsible">Responsible</label>
                    <select
                        className="form-control"
                        id="responsible"
                        value={responsible}    
                        onChange={(e) => setResponsible(e.target.value)}
                    >
                        <option value="">Select responsible</option>
                        {users.map(user => (
                            <option key={user.id} value={user.name}>{user.name}</option>
                        ))}
                    </select>   
                </div>   
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {loading}
        </div>
    )
}

export default NewClient

