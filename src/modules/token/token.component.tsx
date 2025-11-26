import React from 'react'
import {
	BrowserRouter, Route, Routes,
} from 'react-router-dom'
import {
	Header,
} from './components/header.component'
import {
	ProductDeatlis,
} from './components/products/productDetails'
import {
	Products,
} from './components/products/products'
import Authentication from '../../pages/Authentication'
import Payment from '../../pages/Payment'
import ShopDetails from './components/Shop/ShopDetails/ShopDetails'
import ResetPass from './components/Authentication/Reset/ResetPass'
import Shop from '../../pages/Shop'

import {
	Main,
} from './main'

export const App: React.FC = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/products' element={<Products />} />
					<Route path='/loginSignUp' element={<Authentication />} />
					<Route path='/resetPassword' element={<ResetPass />} />
					<Route path='/shop' element={<Shop/>} />
					<Route path='/cart' element={<Payment />} />
					<Route path='/product/:id' element={<ProductDeatlis />} />{' '}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
