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
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-3 col-md-3 col-6 d-flex align-items-center">
                        <Link to={"/"} className="navbar-brand">
                            <img src={require("../assets/images/ShopLogo/weblogo.png")}
                                alt="Logo"
                                style={{ height: "80px" }} />
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-6 d-none d-md-block">
                        <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to={"/allproducts"} className="nav-link">All Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/about"} className="nav-link">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/contact"} className="nav-link">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6 d-flex justify-content-end align-items-center">
                        {/* Cart Button */}
                        <Link to={"/cart"} className="me-3">
                            <button className="btn btn-warning position-relative border-0">
                                <i style={{ fontSize: "18px" }} className="fa-solid fa-cart-shopping text-dark"></i>
                                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                                    {count}
                                </span>
                            </button>
                        </Link>

                        {/* Login/Logout Button */}
                        {!loggedInUser ? (
                            <Link to={"/login"}>
                                <button className="btn btn-warning border-0">Login</button>
                            </Link>
                        ) : (
                            <button onClick={(e) => logout(e)} className="btn btn-danger border-0">Logout</button>
                        )}
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
