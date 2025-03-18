import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';


export default function Contact() {
	const [data, setData] = useState({
		name: "",
		surname: "",
		email: "",
		subject: "",
		message: ""
	})
	const [error, setError] = useState({
		nameError: "",
		surnameError: "",
		emailError: "",
		subjectError: "",
		messageError: ""
	})

	function handleChange(e) {
		setError({
			nameError: "",
			surnameError: "",
			emailError: "",
			subjectError: "",
			messageError: ""
		})
			
		setData({ ...data, [e.target.id]: e.target.value })
	}

	function handleSubmit(e) {
		

		const errObj = {
			nameError: "",
			surnameError: "",
			emailError: "",
			subjectError: "",
			messageError: ""
		};
		e.preventDefault();
		
		if (!data.name.trim()) {
			errObj.nameError = "Name is Required"
		} else if (data.name.trim().length <= 2) {
			errObj.nameError = "Above 1 Character Required"
		}if (!data.surname.trim()) {
			errObj.surnameError = "Surname is Required"
		} else if (data.surname.trim().length <= 2) {
			errObj.surnameError = "Above 2 Character Required"
		}if (!data.email.trim()) {
			errObj.emailError = "Email is Required"
		} else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)) {
			errObj.emailError = "Please Enter Valid Emaild"
		}if (!data.subject.trim()) {
			errObj.subjectError = "subject is Required"
		} else if (data.subject.trim().length <= 2) {
			errObj.subjectError = "Above 2 Character Required"
		}if (!data.message.trim()) {
			errObj.messageError = "Message is Required"
		}
		setError(errObj)

	}
	return (
	<>
	<Header/>
		<div id="colorlib-contact">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<h3>Contact Information</h3>
						<div className="row contact-info-wrap">
							<div className="col-md-3">
								<p><span><i className="fa-solid fa-location-dot"></i></span> 4th Lane, E Ward, Shahupuri, <br /> Kolhapur, Maharashtra 416001.</p>
							</div>
							<div className="col-md-3">
								<p><span><i className="fa-solid fa-phone"></i></span> <a href="tel://1234567920">+91 1234567890</a></p>
							</div>
							<div className="col-md-3">
								<p><span><i className="fa-regular fa-paper-plane"></i></span> <a href="mailto:info@laptopsolutions.com">info@laptopsolutions.com</a></p>
							</div>
							<div className="col-md-3">
								<p><span><i className="fa-solid fa-globe"></i></span> <a href="#">laptopsolutions.com</a></p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 border">
						<div className="contact">
							<h3>Get In Touch</h3>
							<form action="#" className="contact-form">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="fname">First Name </label>
											{error.nameError && <span className="text-danger">{" " + error.nameError}</span>}
											<input onChange={(e) => handleChange(e)} type="text" id="name" className="form-control" placeholder="Your firstname" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="lname">Last Name </label>
											{error.surnameError && <span className="text-danger">{error.surnameError}</span>}
											<input onChange={(e) => handleChange(e)} type="text" id="surname" className="form-control" placeholder="Your lastname" />
										</div>
									</div>
									<div className="w-100"></div>
									<div className="col-sm-12">
										<div className="form-group">
											<label htmlFor="email">Email </label>
											{error.emailError && <span className="text-danger">{error.emailError}</span>}
											<input onChange={(e) => handleChange(e)} type="text" id="email" className="form-control" placeholder="Your email address" />
										</div>
									</div>
									<div className="w-100"></div>
									<div className="col-sm-12">
										<div className="form-group">
											<label htmlFor="subject">Subject </label>
											{error.subjectError && <span className="text-danger">{error.subjectError}</span>}
											<input onChange={(e) => handleChange(e)} type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
										</div>
									</div>
									<div className="w-100"></div>
									<div className="col-sm-12">
										<div className="form-group">
											<label htmlFor="message">Message </label>
											{error.messageError && <span className="text-danger">{error.messageError}</span>}
											<textarea onChange={(e) => handleChange(e)} name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us"></textarea>
										</div>
									</div>
									<div className="w-100"></div>
									<div className="col-sm-12">
										<div className="form-group">
											<button onClick={(e) => handleSubmit(e)} className="btn btn-success">Send Message</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-md-6">
						<div id="map" className="colorlib-map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.534753549477!2d74.23471047388887!3d16.700149122241665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1003e3ecdc9e5%3A0x2ba56a8a14cd9d51!2s4th%20Ln%2C%20E%20Ward%2C%20Shahupuri%2C%20Kolhapur%2C%20Maharashtra%20416001!5e0!3m2!1sen!2sin!4v1716230326235!5m2!1sen!2sin" width="600" height="450" style={{border:"0px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer/>
		</>
	)
}
