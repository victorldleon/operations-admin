import React, { useState } from 'react';
import './New.css'

const NewClient = () => { 
    const [name, setName] = useState('');
    const [responsible, setResponsible] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const response = await fetch('https://react-hooks-8fca3-default-rtdb.firebaseio.com/Clients.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
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
                        <option value="John Doe">John Doe</option>
                        <option value="Jane Doe">Jane Doe</option>
                    </select>   
                </div>   
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {loading}
        </div>
    )
}

export default NewClient

