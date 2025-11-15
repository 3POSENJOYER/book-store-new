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
import ShopDetails from './components/Shop/ShopDetails/ShopDetails'

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
					<Route path='/shop' element={<ShopDetails />} />
					<Route path='/product/:id' element={<ProductDeatlis />} />{' '}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
