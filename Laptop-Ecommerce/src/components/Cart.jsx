import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../app/addCartSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
    var subTotalCartPrice = 0;
    var deliveryCharges = 40;
    var discount = 0;
    const dispatch = useDispatch();
    let data = useSelector((state) => state.cart);
    let navigate = useNavigate();

    function handleCheckout() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            navigate('/checkout');
        } else {
            navigate('/login');
        }
    }

    return (
        <div>
            <Header />
            <div className="container-fluid mt-5">
                <div className='text-end mt-3 mx-4'>
                    <button onClick={() => navigate(-1)} className='btn btn-danger'>Back</button>
                </div>
                <div className="table-responsive mt-3">
                    <table className="table bill-table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product, i) => {
                                subTotalCartPrice += product.price * product.quantity;
                                return (
                                    <tr className='text-center' key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td><img style={{ width: "70px" }} src={product.image} alt="" /></td>
                                        <td>{product.title}</td>
                                        <td>₹ {product.price}</td>
                                        <td>
                                            <button onClick={() => dispatch(decrementQuantity(product.id))} type='button' className="btn btn-sm" style={{ background: "#373063", color: "white" }}>-</button>
                                            <span className="mx-2" style={{ fontSize: "15px", border: "1px solid", padding: "5px" }} value={product.quantity}>{product.quantity}</span>
                                            <button onClick={() => dispatch(incrementQuantity(product.id))} type='button' className='btn btn-sm btn-success'>+</button>
                                        </td>
                                        <td>₹ {product.price * product.quantity}</td>
                                        <td><button onClick={() => dispatch(removeFromCart(product.id))} className='btn btn-secondary'>X</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-7 mb-3">
                        <div className="d-flex flex-column flex-md-row align-items-center">
                            <input className='form-control w-100 w-md-75 text-center mb-2 mb-md-0' type="text" placeholder='Your Coupon Number' />
                            <button className='btn ms-md-2' style={{ background: "#373063", color: "white" }}>Apply Coupon</button>
                        </div>
                    </div>
                    <div className="col-lg-5 checkoutbox">
                        <div className="card">
                            <div className="card-body">
                                <p className="text-center" style={{ fontSize: "20px" }}>Thank you for your purchase</p>
                                <div className='text-left'>
                                    <div className="row">
                                        <hr />
                                        <div className="col-8">
                                            <p>Subtotal:</p>
                                        </div>
                                        <div className="col-4">
                                            <p className="float-end">₹ {subTotalCartPrice}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <p>Delivery:</p>
                                        </div>
                                        <div className="col-4">
                                            <p className="float-end">₹ {deliveryCharges}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <p>Discount:</p>
                                        </div>
                                        <div className="col-4">
                                            <p className="float-end">₹ {discount}</p>
                                        </div>
                                    </div>
                                    <hr style={{ border: "2px solid black" }} />
                                    <div className="row text-black">
                                        <div className="col-12">
                                            <p className="float-end fw-bold">Total: ₹ {subTotalCartPrice + deliveryCharges + discount} /-</p>
                                        </div>
                                        <div className='text-center'>
                                            <button onClick={handleCheckout} className='btn btn-success w-50'>Checkout</button>
                                        </div>
                                        <hr style={{ border: "2px solid black" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
