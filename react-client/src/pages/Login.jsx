import { Link } from 'react-router-dom';
import './login.css';
import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:90/login', { email, password });
            alert(response.data.message);
            // Handle successful login (e.g., store token, redirect)
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <div className="container custom-container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card custom-card">
                        <div className="card-body custom-card-body">
                            <h5 className="card-title custom-card-title">Login</h5>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label custom-form-label">Email address</label>
                                    <input type="email" className="form-control custom-form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label custom-form-label">Password</label>
                                    <input type="password" className="form-control custom-form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <button type="submit" className="btn btn-primary custom-btn" onSubmit={handleLogin}>Continue</button>
                            </form>
                            <p className="mt-3 custom-link-text">Dont have an account? <Link to="/signup" className="custom-link">SignUp here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
