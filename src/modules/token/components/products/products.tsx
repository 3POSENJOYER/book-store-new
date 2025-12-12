/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './products.css'

// Базовий URL для NestJS API
const API_BASE_URL = import.meta.env['VITE_API_URL'] || 'http://localhost:3000'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Product {
	productID: number
	productName: string
	produtDescription: string
	frontImg?: string
	backImg?: string
	productPrice: number
	productReviews: string
}

export const Products: React.FC = () => {
	const [products, setProducts] = useState<Array<Product>>([])
	const [cartData, setCartData] = useState<Array<Product>>([])

	useEffect(() => {
		const fetchProducts = async (): Promise<void> => {
			try {
				const res = await fetch(`${API_BASE_URL}/api/products`)

				if (!res.ok) {
					throw new Error(`Failed to fetch products: ${res.status}`)
				}

				const data: Array<Product> = await res.json()
				setProducts(data)
			} catch (err) {
				console.error('Помилка завантаження продуктів:', err)
			}
		}
		fetchProducts()
	}, [])

	const addToCart = async (id: number): Promise<void> => {
		const apiUrl = import.meta.env['VITE_API_URL'] || 'http://localhost:3000'

		try {
			const res = await fetch(`${apiUrl}/api/cart`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					productID: id,
					quantity: 1,
				}),
			})
			if (res.ok) {
				console.log('Додано в кошик!')
			}
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		if (cartData.length === 0) {
			return
		}
		const postCartData = async (): Promise<void> => {
			try {
				const res = await fetch(`${API_BASE_URL}/api/storeDataServer`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json; charset=UTF-8',
					},
					body: JSON.stringify(cartData),
				})

				const response = await res.json()

				console.log('API відповідь на додавання в кошик:', response)
			} catch (err) {
				console.error('Помилка відправки даних кошика:', err)
			}
			
		}
		postCartData()
	}, [cartData])
	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<div className='container'>
			{products.map((product: Product) => {
				return (
					<div className='trendyProductContainer' key={product.productID}>
						<div className='trendyProductImages'>
							<Link to={`/product/${product.productID}`} onClick={scrollToTop}>
								<img src={product.frontImg} alt='' className='trendyProduct_front' />
								<img src={product.backImg} alt='' className='trendyProduct_back' />
							</Link>
							<h4
								onClick={(): void => {
									addToCart(product.productID)
								}}
							>
								Add to cart
							</h4>
						</div>
						<div className='trendyProductImagesCart'></div>
						<div className='trendyProductInfo'>
							<div className='trendyProductCategoryWishlist'>
								<p></p>
							</div>
							<div className='trendyProductNameInfo'>
								<Link to={`/product/${product.productID}`} onClick={scrollToTop}>
									<h5>{product.productName}</h5>
								</Link>

								<p>${product.productPrice}</p>
								<div className='trendyProductRatingReviews'>
									<div className='trendyProductRatingStar'></div>
									<span>{product.productReviews}</span>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
