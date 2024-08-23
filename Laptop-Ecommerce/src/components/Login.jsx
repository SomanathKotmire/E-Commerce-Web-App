import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function Login() {

    let navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get("http://localhost:3002/users")
            .then(res => {
                const users = res.data;
                const user = users.find(user => 
                    user.email == data.email && 
                    user.password == data.password
                );

                if (user) {
                    alert('Login successful!');
                    localStorage.setItem('loggedInUser', JSON.stringify({ data }));
                    navigate('/checkout');
                } else {
                    setErrorMessage('Invalid email or password');
                }
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
                setErrorMessage('There was a problem logging in. Please try again later.');
            });
    }

    return (
        <div>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">LogIn</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        name="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                                <button type="submit" className="btn btn-primary w-100 mb-2">LogIn</button>
                            </form>
                            <Link to={"/registraion"}>
                            <button className="btn btn-link w-100">Switch to Register</button>
                            </Link>
                            <Link to={"/"}>
                            <button className="btn btn-link w-100">Go to Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
}
