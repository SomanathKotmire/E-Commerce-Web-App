import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Adminpage() {
    let navigate = useNavigate()
    function logoutUser() {
        localStorage.clear();
        navigate("/")
    }
    return (
        <div>
            <Header/>
           <div className="admin row">
    <div className="col-lg-2 col-md-3 col-sm-12">
        <ul className="nav flex-column text-start border bg-light mt-2 shadow">
            <Link to="/admin" className="nav-item">
                <a className="nav-link " href="#"><i className="fa-solid fa-display me-2 text-dark"></i>Dashboard</a>
            </Link>
            <Link to="/admin/products" className="nav-item">
                <a className="nav-link" href="#"><i className="fa-solid fa-boxes-stacked me-2 text-dark"></i>Products</a>
            </Link>
            <Link to="/admin/addproducts" className="nav-item">
                <a className="nav-link" href="#"><i className="fa-solid fa-arrow-up-wide-short me-2 text-dark"></i>Add Products</a>
            </Link>
            <Link to="/admin/orders" className="nav-item">
                <a className="nav-link" href="#"><i className="fa-solid fa-list me-2 text-dark"></i>Orders</a>
            </Link>
            <li>
                <a className="nav-link" href="#"><i className="fa-solid fa-user me-2 text-dark"></i><span onClick={() => logoutUser()}>LogOut</span></a>
            </li>
        </ul>
    </div>
    <div className="col-lg-10 col-md-9 col-sm-12">
        <Outlet />
    </div>
</div>
<Footer/>
</div>
    )
}
