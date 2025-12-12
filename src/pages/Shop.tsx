/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import Filter from '../modules/token/components/Shop/Filters/Filter'
import '../modules/token/components/Shop/Filters/Filter.css'
import ShopDetails from '../modules/token/components/Shop/ShopDetails/ShopDetails'

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

const Shop: React.FC = () => {
	const [filtered, setFiltered] = useState<Array<Product>>([])
	const [value1, setValue1] = useState<Array<number>>([0, 100])
	const [priceLimits, setPriceLimits] = useState({ min: 0, max: 100 })
	const [isLoading, setIsLoading] = useState(true)

	const apiUrl = import.meta.env['VITE_API_URL'] || 'http://localhost:3000'

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch(`${apiUrl}/api/products`)
				if (!res.ok) {
					throw new Error('Failed to fetch products')
				}

				const data: Array<Product> = await res.json()

				if (data.length > 0) {
					setFiltered(data)

					const prices = data.map((p) => p.productPrice)
					const minPrice = Math.min(...prices)
					const maxPrice = Math.max(...prices)

					setPriceLimits({ min: minPrice, max: maxPrice })
					setValue1([minPrice, maxPrice])
				}
			} catch (err) {
				console.error(err)
			} finally {
				setIsLoading(false)
			}
		}

		fetchProducts()
	}, [apiUrl])

	if (isLoading) {
		return (
			<div className='container' style={{ textAlign: 'center', marginTop: '50px' }}>
				Loading shop...
			</div>
		)
	}

	return (
		<div className='container'>
			<Filter
				setFiltered={setFiltered}
				value1={value1}
				setValue1={setValue1}
				min={priceLimits.min}
				max={priceLimits.max}
			/>
			<ShopDetails value1={value1 as [number, number]} filtered={filtered} />
		</div>
	)
}

export default Shop
