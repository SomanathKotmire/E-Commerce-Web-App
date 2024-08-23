import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer1() {
    return (
        <div className='bg-dark footcolumn mt-3'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 my-3">
                        <div className='foot1 '>
                        <h4>About Laptop Solution</h4>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
						<p>
							<ul className="colorlib-social-icons">
								<li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa-brands fa-square-instagram"></i></a></li>
								<li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
							</ul>
						</p>
                        </div>
                   
                    </div>
                    <div className="col-lg-3 my-3">
                    <h4>Customer Care</h4>
						<p>
							<ul className="">
								<li><a href="#">Contact</a></li>
								<li><a href="#">Returns/Exchange</a></li>
								<li><a href="#">Gift Voucher</a></li>
								<li><a href="#">Wishlist</a></li>
								<li><a href="#">Special</a></li>
								<li><a href="#">Customer Services</a></li>
								<li><a href="#">Site maps</a></li>
							</ul>
						</p>
                    </div>
                    <div className="col-lg-2 my-3">
                    <h4>Information</h4>
						<p>
							<ul className="">
								<li><a href="#">About us</a></li>
								<li><a href="#">Delivery Information</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Support</a></li>
								<li><a href="#">Order Tracking</a></li>
							</ul>
						</p>
                    </div>
                    <div className="col-lg-2 my-3">
                    <h4>News</h4>
						<ul className="">
							<li><a href="#">Blog</a></li>
							<li><a href="#">Press</a></li>
							<li><a href="#">Exhibitions</a></li>
							<li><Link to={"/signup"} href="#">Admin</Link></li>

						</ul>   
                    </div>
                    <div className="col-lg-2 my-3">
                    <h4>Contact Information</h4>
						<ul className="">
							<li>4th Lane, E Ward, Rajarampuri,  <br/> Kolhapur, Maharashtra 416001</li>
							<li><a href="tel://1234567920">+ 1235 2355 98</a></li>
							<li><a href="aspyainamdar@gmail.com">info@mylaptopsolution.com</a></li>
							<li><a href="#">mylaptopsolution.com</a></li>
						</ul>
                    </div>
                </div>

                <div className="row">
					<div className="col-sm-12 text-center">
						<p>
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved 
                        </p>
					</div>
				</div>
            </div>
        </div>
    )
}

