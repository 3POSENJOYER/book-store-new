import Badge from '@mui/material/Badge'
import React from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { FiHeart, FiSearch } from 'react-icons/fi'
import { RiShoppingBagLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import logo from '../../../assets/icons/logo.png'
import './header.css'

export const Header: React.FC = () => {
	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<>
			<nav className='navBar'>
				<div className='logoLinkContainer'>
					<div className='logoContainer'>
						<Link to='/' onClick={scrollToTop}>
							<img src={logo} alt='logo' />
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
						<Badge
							badgeContent='0'
							color='primary'
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
						>
							<RiShoppingBagLine size={22} />
						</Badge>
					</Link>
					<Link to='/favorites'>
						<FiHeart size={22} onClick={scrollToTop} />
					</Link>
				</div>
			</nav>
		</>
	)
}

export default Header
