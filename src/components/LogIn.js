import { login } from "./apis";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState();

    

    useEffect(() => {
        if(token) {
            Link('/posts');
        }
    }, [token,])

    async function submitLogin(event) {
        event.preventDefault();
        if (!username) {
            setError("Username is required!");
        } else if(password.length < 7) {
            setError("Password needs to be atleast 7 characters!");
        } else {
            setError("");
            const user = {
                user: {
                    username,
                    password
                }
            }
            const response = await login(user);
            if(response.error) {
                setError(response.error.message)
            } else {
                localStorage.setItem('token', response.data.token);
                setToken(response.data.token);
            }
        }
    }
    return (
        <div>
            <h1>Login To Your Account</h1>
            <form onSubmit={submitLogin} >
                <label>Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)} 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Login</button>
                <p>{error}</p>
            </form>
            
        </div>
    );
}

export default LogIn;
