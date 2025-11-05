import React, {
	useState,
} from 'react'
import './header.css'

import {
	FiSearch,
} from 'react-icons/fi'
import {
	FaRegUser,
} from 'react-icons/fa6'
import {
	FiHeart,
} from 'react-icons/fi'

import {
	Link,
} from 'react-router-dom'

export const Header: React.FC = () => {
	const scrollToTop = ():void => {
		window.scrollTo({
			top:      0,
			behavior: 'smooth',
		},)
	}
	return (
		<>
			<nav className='navBar'>
				<div className='logoLinkContainer'>
					<div className='logoContainer'>
						<Link to='/' onClick={scrollToTop}>
							<h2>books store</h2>
						</Link>
					</div>
					<div className='linkContainer'>
						<ul>
							<li>
								<Link to='/' onClick={scrollToTop}>
                  HOME
								</Link>
							</li>
							<li>
								<Link to='/shop' onClick={scrollToTop}>
                  SHOP
								</Link>
							</li>
							<li>
								<Link to='/blog' onClick={scrollToTop}>
                  BLOG
								</Link>
							</li>
							<li>
								<Link to='/about' onClick={scrollToTop}>
                  ABOUT
								</Link>
							</li>
							<li>
								<Link to='/contact' onClick={scrollToTop}>
                  CONTACT
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='iconContainer'>
					<FiSearch size={22} onClick={scrollToTop} />
					<Link to='/loginSignUp' onClick={scrollToTop}>
						<FaRegUser size={22} />
					</Link>
					<Link to='/cart' onClick={scrollToTop}>
						{/* <Badge
							badgeContent={cart.items.length === 0 ?
								'0' :
								cart.items.length}
							color='primary'
							anchorOrigin={{
								vertical:   'bottom',
								horizontal: 'right',
							}}
						>
							<RiShoppingBagLine size={22} />
						</Badge>*/}
					</Link>
					<FiHeart size={22} onClick={scrollToTop} />

				</div>
			</nav>
		</>
	)
}

export default Header

