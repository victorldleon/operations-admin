import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './New.css'

const NewUser = () => { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [skills, setSkills] = useState('');
    const [englishLevel, setEnglishLevel] = useState('');
    const [cvUrl, setCvUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const response = await fetch('https://react-hooks-8fca3-default-rtdb.firebaseio.com/users.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    passwordConfirmation,
                    englishLevel,
                    skills,
                    cvUrl
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
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');
        setSkills('');
        setEnglishLevel('');
        setCvUrl('');
        history.push('/');
    };

    const loading = isLoading ? <div className='loading'><p>Loading...</p></div> : null;
    const errorMessage = error ? <div className='error'><p>{error}</p></div> : null;
    const successMessage = success ? <div className='success'><p>{success}</p></div> : null;
    
    return (
        <div>
            <h1>New User</h1>
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
                    <label htmlFor="email">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input 
                        type="password"     
                        className="form-control" 
                        id="password" 
                        placeholder="Password" 
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="englishLevel">English Level</label>
                    <select 
                        className="form-control" 
                        id="englishLevel"
                        value={englishLevel}
                        onChange={(e) => setEnglishLevel(e.target.value)}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="skills" 
                        placeholder="Skills"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvUrl">CV URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cvUrl"
                        placeholder="CV URL"
                        value={cvUrl}
                        onChange={(e) => setCvUrl(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {loading}
        </div>
    )
}

export default NewUser

