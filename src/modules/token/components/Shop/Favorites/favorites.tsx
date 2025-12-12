/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus, FaTimes } from 'react-icons/fa'
import './favorites.css'

interface Product {
	productID: number
	productName: string
	productPrice: number
	frontImg: string
	backImg?: string
	productReviews: string
	produtDescription?: string
}

const Favorites: React.FC = () => {
	const [favorites, setFavorites] = useState<Array<Product>>([])
	const [isLoading, setIsLoading] = useState(true)

	const apiUrl = import.meta.env['VITE_API_URL'] || 'http://localhost:3000'

	useEffect(() => {
		const fetchData = async () => {
			try {
				const resIds = await fetch(`${apiUrl}/api/favorites`)
				if (!resIds.ok) {
					throw new Error('Failed to fetch favorites')
				}
				const heartedIds: Array<number> = await resIds.json()

				if (heartedIds.length === 0) {
					setFavorites([])
					setIsLoading(false)
					return
				}

				const resProds = await fetch(`${apiUrl}/api/products`)
				if (!resProds.ok) {
					throw new Error('Failed to fetch products')
				}
				const allProducts: Array<Product> = await resProds.json()

				const idsSet = new Set(heartedIds)
				const filtered = allProducts.filter((p) => idsSet.has(p.productID))

				setFavorites(filtered)
			} catch (err) {
				console.error(err)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [apiUrl])

	const removeFavorite = async (id: number) => {
		try {
			const res = await fetch(`${apiUrl}/api/favorites/${id}`, { method: 'DELETE' })
			if (res.ok) {
				setFavorites((prev) => prev.filter((p) => p.productID !== id))
			}
		} catch (err) {
			console.error(err)
		}
	}

	const addToCart = async (id: number) => {
		try {
			const res = await fetch(`${apiUrl}/api/cart`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ productID: id, quantity: 1 }),
			})
			if (res.ok) {
				alert('Added to cart!')
			}
		} catch (err) {
			console.error(err)
		}
	}

	if (isLoading) {
		return <div className='favorites-empty'>Loading favorites...</div>
	}

	if (favorites.length === 0) {
		return <div className='favorites-empty'>No favorite products yet</div>
	}

	return (
		<div className='favorites-container' style={{ padding: '20px' }}>
			<h1 className='favorites-title'>My Favorites</h1>

			<div className='favorites-grid' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
				{favorites.map((product) => (
					<div
						key={product.productID}
						className='favorite-card'
						style={{
							width: '250px',
							position: 'relative',
							border: '1px solid #eee',
							padding: '10px',
							borderRadius: '8px',
						}}
					>
						<div
							onClick={async () => removeFavorite(product.productID)}
							style={{
								position: 'absolute',
								top: '10px',
								right: '10px',
								cursor: 'pointer',
								background: '#fff',
								borderRadius: '50%',
								padding: '5px',
								boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
								zIndex: 10,
							}}
						>
							<FaTimes color='#ff0000' />
						</div>

						<Link to={`/product/${product.productID}`}>
							<img
								src={product.frontImg}
								alt={product.productName}
								className='favorite-image'
								style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '5px' }}
							/>
						</Link>

						<div className='favorite-info' style={{ marginTop: '10px' }}>
							<h3 className='favorite-title' style={{ fontSize: '16px', fontWeight: 'bold' }}>
								{product.productName}
							</h3>
							<p className='favorite-price' style={{ color: '#555' }}>
								${product.productPrice}
							</p>

							<button
								onClick={async () => addToCart(product.productID)}
								style={{
									marginTop: '10px',
									width: '100%',
									padding: '8px',
									background: '#000',
									color: '#fff',
									border: 'none',
									borderRadius: '4px',
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '5px',
								}}
							>
								Add to Cart <FaCartPlus />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Favorites
