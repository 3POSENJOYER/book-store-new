import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

const About: React.FC = () => {
	return (
		<div className='about-container'>
			<div className='about-breadcrumb'>
				<Link to='/'>HOME</Link> / <span className='active'>ABOUT</span>
			</div>

			<h1 className='about-title'>ABOUT US</h1>
			<p className='about-subtitle'>Your destination for books, inspiration and knowledge.</p>

			<div className='about-content'>
				<div className='about-text'>
					<h2>Who We Are</h2>
					<p>
						We are passionate storytellers, readers and dreamers dedicated to connecting people with books that inspire,
						educate and entertain. Our mission is to bring high-quality literature to everyone, everywhere.
					</p>

					<h2>Our Mission</h2>
					<p>
						To create a space where readers can explore, discover and fall in love with new stories. Whether you're
						searching for the latest bestseller or a timeless classic — our collection has something for every book
						lover.
					</p>

					<h2>Why Choose Us</h2>
					<ul>
						<li>✓ Wide selection of books from all genres</li>
						<li>✓ Premium customer experience</li>
						<li>✓ Secure payments and fast delivery</li>
						<li>✓ Passionate team of book experts</li>
					</ul>
				</div>

				<div className='about-image-wrapper'>
					<img
						className='about-image'
						src='src/modules/token/components/social/images/blog1.jpg'
						alt='About The Book Haven'
					/>
				</div>
			</div>
		</div>
	)
}

export default About
