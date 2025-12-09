import React, { useEffect, useState } from 'react'
import './favorites.css'

interface IProduct {
	id: number
	title: string
	price: number
	image: string
	description?: string
}

const Favorites: React.FC = () => {
	const [favorites, setFavorites] = useState<Array<IProduct>>([])

	useEffect(() => {
		// 1. Завантажуємо список улюблених товарів з localStorage
		const stored = localStorage.getItem('favorites')

		if (stored) {
			setFavorites(JSON.parse(stored))
		}
	}, [])

	if (favorites.length === 0) {
		return <div className='favorites-empty'>No favorite products yet</div>
	}

	return (
		<div className='favorites-container'>
			<h1 className='favorites-title'>My Favorites</h1>

			<div className='favorites-grid'>
				{favorites.map((product) => (
					<div key={product.id} className='favorite-card'>
						<img src={product.image} alt={product.title} className='favorite-image' />

						<div className='favorite-info'>
							<h3 className='favorite-title'>{product.title}</h3>
							<p className='favorite-price'>${product.price}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Favorites
