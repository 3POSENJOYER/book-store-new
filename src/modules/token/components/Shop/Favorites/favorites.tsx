import React, { useEffect, useState } from 'react'

interface IProduct {
	id: number
	title: string
	price: number
	image: string
	description?: string
	// add more fields as needed
}

const Favorites: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true)
	const [favorites, setFavorites] = useState<Array<IProduct>>([])
	const [error, setError] = useState<string | null>(null)

	const API_BASE_URL = 'http://localhost:3000'

	useEffect(() => {
		const fetchFavorites = async (): Promise<void> => {
			setLoading(true)
			setError(null)

			try {
				const favRes = await fetch(`${API_BASE_URL}/favorites`)
				if (!favRes.ok) {
					throw new Error('Failed to load favorites')
				}
				const favoriteIds: Array<number> = await favRes.json()

				if (favoriteIds.length === 0) {
					setFavorites([])
					return
				}

				const productPromises = favoriteIds.map(async (id) => {
					return fetch(`${API_BASE_URL}/products/${id}`).then(async (res) => {
						if (!res.ok) {
							throw new Error(`Product ${id} not found`)
						}
						return res.json()
					})
				})
				const products = await Promise.all(productPromises)
				setFavorites(products)
			} catch (err) {
				console.error(err)
				setError(err.message || 'Something went wrong')
				setFavorites([])
			} finally {
				setLoading(false)
			}
		}
		fetchFavorites()
	}, [])

	// Loading state
	if (loading) {
		return <div className='p-8 text-center'>Loading your favorites...</div>
	}

	// Error state
	if (error) {
		return <div className='p-8 text-center text-red-500'>{error}</div>
	}

	// Empty state
	if (favorites.length === 0) {
		return <div className='p-8 text-center text-gray-500'>No favorite products yet</div>
	}

	// Success: Render favorites
	return (
		<div className='p-6 max-w-6xl mx-auto'>
			<h1 className='text-3xl font-bold mb-8'>My Favorites</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{favorites.map((product) => {
					return (
						<div key={product.id} className='border rounded-lg overflow-hidden shadow hover:shadow-lg transition'>
							<img src={product.image} alt={product.title} className='w-full h-64 object-cover' />
							<div className='p-4'>
								<h3 className='font-semibold text-lg truncate'>{product.title}</h3>
								<p className='text-xl font-bold text-green-600 mt-2'>${product.price}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Favorites
