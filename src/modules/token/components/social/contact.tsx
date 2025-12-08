import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'

const Contact: React.FC = () => {
	return (
		<div className='contact-container'>
			<div className='contact-breadcrumb'>
				<Link to='/'>HOME</Link> / <span className='active'>CONTACT</span>
			</div>

			<h1 className='contact-title'>CONTACT US</h1>
			<p className='contact-subtitle'>We’re here to help. Reach out with any questions.</p>

			<div className='contact-grid'>
				<div className='contact-box'>
					<h2>Get In Touch</h2>
					<p>Have questions about your order? Looking for a specific book? Our support team is ready to assist you.</p>

					<form className='contact-form'>
						<input type='text' placeholder='Your Name' required />
						<input type='email' placeholder='Email Address' required />
						<textarea placeholder='Message' rows={5} required />
						<button type='submit'>Send Message</button>
					</form>
				</div>

				<div className='contact-info'>
					<h2>Contact Information</h2>
					<p>Email: support@bookhaven.com</p>
					<p>Phone: +1 555-123-4567</p>
					<p>Working hours: Mon–Fri, 9:00–18:00</p>

					<div className='contact-map'>
						<iframe
							title='map'
							loading='lazy'
							src='https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed'
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
