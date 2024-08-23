import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../app/addCartSlice";
import { Link, useNavigate } from 'react-router-dom';

export default function Allproducts() {
    const [spinner, setSpinner] = useState(true);
    const [newData, setNewdata] = useState([]);
    const [error, setError] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState({
        brand: "",
        color: "",
        price: ""
    });
    let dispatch = useDispatch();
    let navigate = useNavigate();

    function showData() {
        axios.get("http://localhost:3002/products")
            .then((res) => {
                console.log(res.data);
                setNewdata(res.data);
                setFilteredProducts(res.data); // Initialize filteredProducts with all products
                setSpinner(false);
            }).catch((err) => {
                setError("Unable to fetch product data");
            });
    };

    useEffect(() => {
        showData();
    }, []);

    function addProductToCart(product) {
        let cartProduct = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1
        };
        dispatch(addToCart(cartProduct));
    }

    function handleImageClick(id) {
        navigate(`/singlepage/${id}`);
    }

    function handleFilterChange(e) {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    }

    function applyFilters() {
        let laptops = [...newData]; // Start with all products

        if (filter.brand) {
            laptops = laptops.filter((product) => product.title === filter.brand);
        }

        if (filter.color) {
            laptops = laptops.filter((product) => product.model === filter.color);
        }

        if (filter.price) {
            laptops = laptops.sort((a, b) => {
                if (filter.price === 'asc') {
                    return parseFloat(a.price) - parseFloat(b.price);
                } else if (filter.price === 'desc') {
                    return parseFloat(b.price) - parseFloat(a.price);
                }
                return 0;
            });
        }

        setFilteredProducts(laptops); // Update filteredProducts with the filtered results
    }

    function handleSearch(text) {
        // console.log(text);
        
        let searchResult = [...newData];
        if (text) {
            searchResult = searchResult.filter((product) =>
                product.title.toLowerCase().includes(text.toLowerCase())
            );
        }
        setFilteredProducts(searchResult);
    };
    
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3 mt-2 filter-section bg-light text-start">
                        <h2>Filter</h2>
                        <div className="filter-group">
                            <h4>Brand</h4>
                            <select className='form-control' name="brand" onChange={handleFilterChange}>
                                <option value="">All</option>
                                <option value="hp">HP</option>
                                <option value="dell">Dell</option>
                                <option value="asus">Asus</option>
                                <option value="acer">Acer</option>
                                <option value="lenovo">Lenovo</option>
                            </select>
                        </div>
                        <div className="filter-group mt-3">
                            <h4>Color</h4>
                            <select className='form-control' name="color" onChange={handleFilterChange}>
                                <option value="">All</option>
                                <option value="black">Black</option>
                                <option value="blue">Blue</option>
                                <option value="grey">Grey</option>
                            </select>
                        </div>
                        <div className="filter-group mt-3">
                            <h4>Sort by Price</h4>
                            <select className='form-control' name="price" onChange={handleFilterChange}>
                                <option value="">None</option>
                                <option value="asc">Low to High</option>
                                <option value="desc">High to Low</option>
                            </select>
                        </div>
                        <button onClick={applyFilters} className='btn btn-success mt-3'>Apply Filters</button>
                    </div>
                    <div className="col-lg-8 text-center product-section">
                        <h2 className='mb-4'>All Products</h2>
                        <div className="search-bar mb-3">
                            <input
                                onChange={(e) => handleSearch(e.target.value)}
                                className='form-control ms-5 mt-4'
                                type="text"
                                placeholder="Search products by name..."
                            />
                        </div>
                        <section>
                            <div className='row justify-content-center'>
                                {
                                    spinner ?
                                        <div className="div">
                                            <div className="alert alert-danger">{error}</div>
                                            <div className="d-flex justify-content-center">
                                                <div className="spinner-border text-primary" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        </div> :
                                        filteredProducts.map((allData) => {
                                            return (
                                                <div className="col-12 col-md-6 col-lg-4" key={allData.id}>
                                                    <div className="card w-100">
                                                        <img className='p-3' src={allData.image} alt="" onClick={() => handleImageClick(allData.id)} />
                                                        <div className="card-body">
                                                            <h5>{allData.title}</h5>
                                                            <p className='text-dark'>{allData.discription}</p>
                                                            <strong className='fw-bold mb-3'>MRP:-</strong><del>{allData.mrp}</del>
                                                            <ins className='ms-2'>{allData.price}</ins><br />
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <button onClick={() => addProductToCart(allData)} className='btn btn-warning'>Add to Cart</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
