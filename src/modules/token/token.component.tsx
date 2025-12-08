import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/header.component'
import { ProductDeatlis } from './components/products/productDetails'
import { Products } from './components/products/products'
import Authentication from '../../pages/Authentication'
import Favorites from './components/Shop/Favorites/favorites'
import Payment from '../../pages/Payment'
import ShopDetails from './components/Shop/ShopDetails/ShopDetails'
import ResetPass from './components/Authentication/Reset/ResetPass'
import AddBook from './components/AddBook/addBook'
import Shop from '../../pages/Shop'
import Blog from './components/social/blog'
import About from './components/social/about'
import Contact from './components/social/contact'

export const App: React.FC = () => {
	return (
		<div>
			<BrowserRouter basename='/book-store-new'>
				<Header />
				<Routes>
					<Route path='/' element={<Products />} />
					<Route path='/loginSignUp' element={<Authentication />} />
					<Route path='/resetPassword' element={<ResetPass />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/about' element={<About />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/cart' element={<Payment />} />
					<Route path='/AddBook' element={<AddBook />} />
					<Route path='/product/:id' element={<ProductDeatlis />} />{' '}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
