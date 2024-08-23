import React from 'react'
import Header from './Header';
import Footer from './Footer';


export default function About() {
	return (
		<div>
			<Header/>
		  <div className="colorlib-about">
			<div className="container">
			  <div className="row row-pb-lg">
				<div className="col-sm-6 mb-3">
				  <div className="video colorlib-video w-100">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/7WrHNF9KKso?si=1q8UmKViQiht-vSS" 
					  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
					</iframe>
				  </div>
				</div>
				<div className="col-sm-6">
				  <div className="about-wrap">
					<h2>Laptop Solution the leading eCommerce Store around the Globe</h2>
					<h5>Laptops are designed to be portable computers. They are smaller and lighter than desktops...</h5>
					<h5>What is a laptop computer? A laptop is a personal computer that can be easily moved and used in a variety of locations...</h5>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  <Footer/>
		</div>
	  );
}
