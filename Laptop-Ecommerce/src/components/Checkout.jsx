import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, incrementQuantity, decrementQuantity } from '../app/addCartSlice'
import { useNavigate } from 'react-router';

export default function Checkout() {

    const [selectedOption, setSelectedOption] = useState('');
    let navigate = useNavigate();

    var subTotalCartPrice = 0;
    var deliveryCharges = 40;
    var discount = 0;
    var total = 0;

    const dispatch = useDispatch()
    let data = useSelector((state) => {
        return state.cart
    });

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: ""

    })

    const [formError, setFormError] = useState({
        firstnameError: "",
        lastnameError: "",
        mobileError: "",
        emailError: "",
        addressError: "",
        cityError: "",
        stateError: "",
        pincodeError: ""
    })

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    console.log(total);

    const handlePayment = (e) => {

        const formErrObj = {};
        if (formData.firstname.trim() === "") {
            formErrObj.firstnameError = "First Name is Required"
        } else if (formData.firstname.trim().length <= 2) {
            formErrObj.firstnameError = "Above 1 Character is Required"
        } if (formData.lastname.trim() === "") {
            formErrObj.lastnameError = "Last Name is Required"
        } else if (formData.lastname.trim().length <= 2) {
            formErrObj.lastnameError = "Above 1 Character is Required"
        } if (formData.mobile.trim() === "") {
            formErrObj.mobileError = "MobileNo is Required"
        } else if (!/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(formData.mobile)) {
            formErrObj.mobileError = "Please Enter Valid No."
        } if (formData.email.trim() === "") {
            formErrObj.emailError = "Email is Required"
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email)) {
            formErrObj.emailError = "Please Enter Valid Email"
        } if (formData.address.trim() === "") {
            formErrObj.addressError = "Address is Required"
        } else if (formData.address.trim().length <= 10) {
            formErrObj.addressError = "Above 10 Character is Required"
        } if (formData.city.trim() === "") {
            formErrObj.cityError = "City is Required"
        } if (formData.state.trim() === "") {
            formErrObj.stateError = "State is Required"
        } if (formData.pincode.trim() === "") {
            formErrObj.pincodeError = "Pincode is Required"
        }
        console.log(total);

        if (Object.keys(formErrObj).length > 0) {
            setFormError(formErrObj)
        } else if (selectedOption === 'online') {
        alert("Order is Placed");

        } else if(selectedOption === 'offline') {
            console.log(data);
            alert("Order is Placed");

        }
    }

    function handleChange(e) {

        setFormError({
            firstnameError: "",
            lastnameError: "",
            mobileError: "",
            emailError: "",
            addressError: "",
            cityError: "",
            stateError: "",
            pincodeError: ""
        })

        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    return (
        <div>
            <Header/>
            <div className="container-fluid mt-2 ">
            <div className='text-end mx-4'>
              <button onClick={()=> navigate(-1)} className='btn btn-danger'>Back</button>
            </div>
                <div className="row mt-3">
                    <div className="col-lg-8 ">
                        <div className='border ps-2 pe-2'>
                            <table class="bill-table table  text-center mt-2 ">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr. No.</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((product, i) => {
                                            subTotalCartPrice += product.price * product.quantity;
                                            total = subTotalCartPrice + deliveryCharges + discount;
                                            return (
                                                <tr className='text-center  justify-content-center' key={i}>
                                                    <th >{i + 1}</th>
                                                    <td><img style={{ width: "70px" }} src={product.image} alt="" /></td>
                                                    <td>{product.title}</td>
                                                    <td>₹ {product.price}</td>
                                                    <td>
                                                        <button onClick={() => dispatch(decrementQuantity(product.id))} type='button' className="btn btn-sm" style={{ background: "#373063", color: "white" }} >-</button>
                                                        <span style={{fontSize:"15px", border:"1px solid", padding:"5px"}}  value={product.quantity}>{product.quantity}</span>                   
                                                        <button onClick={() => dispatch(incrementQuantity(product.id))} type='button' className='btn btn-sm ms-1' style={{ background: "#373063", color: "white" }}>+</button>
                                                    </td>
                                                    <td>₹ {product.price * product.quantity}</td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card checkoutbox">
                            <div class="card-body mx-4">
                                <div class="container">
                                    <p class="" style={{ fontSize: "20px", color: "black" }}>Thank for your purchase</p>
                                    <div className='text-left'>
                                        <div class="row">
                                            <hr />
                                            <div class="col-xl-9">
                                                <p>Subtotal:</p>
                                            </div>
                                            <div class="col-xl-3">
                                                <p class="float-end">₹ {subTotalCartPrice}
                                                </p>
                                            </div>
                                            {/* <hr/> */}
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-9">
                                                <p>Delivery:</p>
                                            </div>
                                            <div class="col-xl-3">
                                                <p class="float-end">₹ {deliveryCharges}
                                                </p>
                                            </div>
                                            {/* <hr/> */}
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-9">
                                                <p>Discount:</p>
                                            </div>
                                            <div class="col-xl-3">
                                                <p class="float-end">₹ {discount}
                                                </p>
                                            </div>
                                            <hr style={{ border: "2px solid black" }} />
                                        </div>
                                        <div class="row text-black">
                                            <div class="col-xl-12">
                                                <p class="float-end fw-bold">Total : ₹  {total} /-
                                                </p>
                                            </div>
                                            <hr style={{ border: "2px solid black" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='py-4'>
                        <div className="container-fluid">
                            <div className="row mt-2 ">
                                <div className="col-lg-12 ">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Basic Infornation</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="">First Name</label>
                                                        <input onChange={(e) => handleChange(e)} type="text" id='firstname' name='firstname' className='form-control' />

                                                        {formError.firstnameError && <span className='text-danger'>{formError.firstnameError}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="">Last Name</label>
                                                        <input onChange={(e) => handleChange(e)} type="text" id='lastname' name='lastname' className='form-control' />
                                                        {formError.lastnameError && <span className='text-danger'>{formError.lastnameError}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="">Mobile Number</label>
                                                        <input onChange={(e) => handleChange(e)} type="text" id='mobile' name='mobile' className='form-control' />
                                                        {formError.mobileError && <span className='text-danger'>{formError.mobileError}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="">Email Address</label>
                                                        <input onChange={(e) => handleChange(e)} type="text" id='email' name='email' className='form-control' />
                                                        {formError.emailError && <span className='text-danger'>{formError.emailError}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="">Full Address</label>
                                                        <textarea onChange={(e) => handleChange(e)} name="address" id='address' rows="3" className='form-control'></textarea>
                                                        {formError.addressError && <span className='text-danger'>{formError.addressError}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="">City</label>
                                                        <input onChange={(e) => handleChange(e)} type="text" id='city' name='city' className='form-control' />
                                                        {formError.cityError && <span className='text-danger'>{formError.cityError}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="">State</label>
                                                        <input onChange={(e) => handleChange(e)} type="text" id='state' name='state' className='form-control' />
                                                        {formError.stateError && <span className='text-danger'>{formError.stateError}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="">Pin Code</label>
                                                        <input onChange={(e) => handleChange(e)} type="text" id='pincode' name='pincode' className='form-control' />
                                                        {formError.pincodeError && <span className='text-danger'>{formError.pincodeError}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3 text-center">
                                                        <div class="form-check form-check-inline fw-bold">
                                                            <input
                                                                type="radio"
                                                                id="offline"
                                                                name="orderType"
                                                                value="offline"
                                                                checked={selectedOption === 'offline'}
                                                                onChange={handleOptionChange}
                                                            />
                                                            <label class="form-check-label" for="inlineRadio1">Cash On Delivery</label>
                                                        </div>
                                                        <div class="form-check form-check-inline fw-bold">
                                                            <input
                                                                type="radio"
                                                                id="online"
                                                                name="orderType"
                                                                value="online"
                                                                checked={selectedOption === 'online'}
                                                                onChange={handleOptionChange}
                                                            />
                                                            <label class="form-check-label" for="inlineRadio2">Online</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3 text-center">
                                                        <button onClick={(e) => { handlePayment(e) }} type='button' className='btn btn-success'>Place Order</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
