import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    let loggedInUser = localStorage.getItem("loggedInUser") || null;

    const count = useSelector((state) => state.cart.length);
    let navigate = useNavigate();

    function logout(e) {
        e.preventDefault();
        localStorage.removeItem("loggedInUser");
        navigate('/');
    }

    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-10 col-md-9 col-8 mt-3 text-left">
                        <h1>Laptop Solution's</h1>
                    </div>
                    <div className="col-lg-1 col-md-2 col-2 mt-4 text-end">
                        <Link to={"/cart"} className="nav-item">
                            <button className="nav-link btn btn-warning position-relative border-0">
                                <i style={{ fontSize: "18px" }} className="fa-solid fa-cart-shopping text-dark"></i>
                                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                                    {count}
                                </span>
                            </button>
                        </Link>
                    </div>
                    <div className="col-lg-1 col-md-1 col-2 mt-3">
                        {!loggedInUser &&
                            <Link to={"/login"} className="nav-item">
                                <button className="nav-link btn btn-warning position-relative border-0">
                                    Login
                                </button>
                            </Link>
                        }

                        {loggedInUser &&
                            <button onClick={(e) => logout(e)} className="nav-link btn btn-warning position-relative border-0">
                                Logout
                            </button>
                        }
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav mt-3">
                                    <Link to={"/"} className="nav-item active">
                                        <a className="nav-link ps-0">Home <span className="sr-only">(current)</span></a>
                                    </Link>
                                    <Link to={"/allproducts"} className="nav-item">
                                        <a className="nav-link">All Products</a>
                                    </Link>
                                    <Link to={"/about"} className="nav-item">
                                        <a className="nav-link">About</a>
                                    </Link>
                                    <Link to={"/contact"} className="nav-item">
                                        <a className="nav-link">Contact</a>
                                    </Link>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div className='offer text-center p-2 mt-3 bg-warning'>
                <div className="container">
                    <marquee>
                        <h2>
                            <a href="#">Our biggest sale yet 20% off all products </a>
                            <span className='space text-warning'>______________</span>
                            <a href="#">25% off (Almost) Everything! Use Code: Festive Sale</a>
                        </h2>
                    </marquee>
                </div>
            </div>
        </div>
    );
}
