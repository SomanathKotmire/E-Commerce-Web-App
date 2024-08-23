import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';


export default function Registration() {

  let navigate = useNavigate()
    const [data, setData] = useState({
      username:"",
      email:"",
      password:""
      })

      function handleChange(e){
        setData({...data, [e.target.id] : e.target.value})
    };

    function handleSubmit(e){
      
          axios.post("http://localhost:3002/users/", data)
          .then((res)=>{
            console.log(res.data);
           alert("registration successful")
            }); 
        navigate("/login");
            setData({
                username:"",
                email:"",
                password:""
            })
         };
        
      
    

    return (
        <div>
            <>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center mb-4">Register</h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username:</label>
                                        <input
                                            type="text"
                                            id="username"
                                            className="form-control"
                                            name="username"
                                            value={data.username}
                                            onChange={(e)=>handleChange(e)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            value={data.email}
                                            onChange={(e)=>handleChange(e)}
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
                                            onChange={(e)=>handleChange(e)}
                                            required
                                        />
                                    </div>
                                   
                                    <button onClick={(e)=>handleSubmit(e)} type="submit" className="btn btn-primary w-100 mb-2">Register</button>
                                </form>
                                <Link to={"/login"}>
                                <button className="btn btn-link w-100">Switch to Login</button>
                                </Link>
                            </div>
                        </div>
                    </div>      
                    <div className="col-lg-3"></div>
                </div>


            </>
        </div>
    )
}
