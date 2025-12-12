import Badge from '@mui/material/Badge'
import React, { useState, useEffect } from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { FiHeart, FiSearch } from 'react-icons/fi'
import { RiShoppingBagLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import logo from '../../../assets/icons/logo.png'
import './header.css'

interface IProduct {
    productID: number
    productName: string
    produtDescription: string
    frontImg?: string
    backImg?: string
    productPrice: number
    productReviews: string
}

const API_BASE_URL = import.meta.env['VITE_API_URL'] || 'http://localhost:3000'

export const Header: React.FC = () => {
    const [data, setData] = useState<Array<IProduct>>([])

    const scrollToTop = async ():Promise<void> => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

   useEffect(() => {
    const fetchData = async ():Promise<void> => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/cart`);
            if (res.ok) {
                const cartItems: Array<IProduct> = await res.json();
                setData(cartItems);
            }
        } catch (err) {
            console.error('Cart fetch error:', err);
        }
    };

    fetchData();
}, []);

    return (
        <nav className="navBar">
            <div className="logoLinkContainer">
                <div className="logoContainer">
                    <Link to="/" onClick={scrollToTop}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="linkContainer">
                    <ul>
                        <li><Link to="/" onClick={scrollToTop}>HOME</Link></li>
                        <li><Link to="/shop" onClick={scrollToTop}>SHOP</Link></li>
                        <li><Link to="/blog" onClick={scrollToTop}>BLOG</Link></li>
                        <li><Link to="/about" onClick={scrollToTop}>ABOUT</Link></li>
                        <li><Link to="/contact" onClick={scrollToTop}>CONTACT</Link></li>
                    </ul>
                </div>
            </div>

            <div className="iconContainer">
                <FiSearch size={22} onClick={scrollToTop} />
                <Link to="/loginSignUp" onClick={scrollToTop}>
                    <FaRegUser size={22} />
                </Link>

                <Link to="/cart" onClick={scrollToTop}>
                    <Badge color='primary' anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} > <RiShoppingBagLine size={22} /> </Badge>
                </Link>

                <Link to="/favorites" onClick={scrollToTop}>
                    <FiHeart size={22} />
                </Link>
            </div>
        </nav>
    )
}

export default Header
