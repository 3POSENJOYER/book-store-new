import React from 'react'
import {
	Link,
} from 'react-router-dom'
import './blog.css'

const Blog: React.FC = () => {
	return (
		<div className='blog-container'>

			<div className='blog-breadcrumb'>
				<Link to='/'>HOME</Link> / <span className='active'>BLOG</span>
			</div>

			<h1 className='blog-title'>OUR BLOG</h1>
			<p className='blog-subtitle'>
				Insights, news and stories from the world of books
			</p>

			<div className='blog-grid'>

				<div className='blog-card'>
					<img src='src/modules/token/components/social/images/blog1.jpg' className='blog-img' alt='Books' />
					<div className='blog-content'>
						<h2 className='blog-card-title'>Top 10 Books to Read in 2025</h2>
						<p className='blog-card-text'>
							We've hand-picked the most anticipated books that will reshape your reading list this year.
						</p>
						<a className='blog-read-more'>Read More →</a>
					</div>
				</div>

				<div className='blog-card'>
					<img src='src/modules/token/components/social/images/blog2.jpg' className='blog-img' alt='Library' />
					<div className='blog-content'>
						<h2 className='blog-card-title'>How to Build a Powerful Reading Habit</h2>
						<p className='blog-card-text'>
							Simple strategies that help turn reading into a true passion.
						</p>
						<a className='blog-read-more'>Read More →</a>
					</div>
				</div>

				<div className='blog-card'>
					<img src='src/modules/token/components/social/images/blog3.jpg' className='blog-img' alt='Author' />
					<div className='blog-content'>
						<h2 className='blog-card-title'>
							Interview with Award-Winning Author Daniel Ross
						</h2>
						<p className='blog-card-text'>
							Exclusive insights into his creative process and inspiration behind his latest bestseller.
						</p>
						<a className='blog-read-more'>Read More →</a>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Blog
