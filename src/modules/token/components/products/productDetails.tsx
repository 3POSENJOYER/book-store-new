/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import './product-detalis.css'

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

export const ProductDeatlis: React.FC = () => {
	const [quantity, setQuantity] = useState(1)
	const [detail, setDetail] = useState<IProduct | null>(null)
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState<Array<IProduct>>([])

	const { id } = useParams<{ id: string }>()

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				const res = await fetch(`${API_BASE_URL}/api/products`)
				if (!res.ok) {
					throw new Error('Failed to fetch products')
				}

				const products: Array<IProduct> = await res.json()
				setData(products)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [])

	// ---------- Fetch product by ID ----------
	useEffect(() => {
		if (!id) {
			return
		}

		const fetchProductDetail = async () => {
			setLoading(true)
			try {
				const res = await fetch(`${API_BASE_URL}/api/products/${id}`)

				if (res.status === 404) {
					setDetail(null)
					setLoading(false)
					return
				}

				if (!res.ok) {
					throw new Error(`HTTP Error: ${res.status}`)
				}

				const product: IProduct = await res.json()
				setDetail(product)
			} catch (err) {
				console.error('Failed to fetch product details:', err)
				setDetail(null)
			} finally {
				setLoading(false)
			}
		}

		fetchProductDetail()
	}, [id])

	// ---------- Add to cart ----------
	const addToCart = async (productID: number) => {
		try {
			const res = await fetch(`${API_BASE_URL}/api/cart`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ productID, quantity }),
			})

			if (res.ok) {
				alert('Added to cart!')
			}
		} catch (err) {
			console.error('Add to cart error:', err)
		}
	}

	// ---------- Quantity handlers ----------
	const increment = () => {
		setQuantity((prev) => prev + 1)
	}

	const decrement = () => {
		if (quantity > 1) {
			setQuantity((prev) => prev - 1)
		}
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value)
		if (!isNaN(value) && value > 0) {
			setQuantity(value)
		}
	}

	if (loading) {
		return <h2>Loading product details...</h2>
	}

	if (!detail) {
		return <h2>Product with ID {id} not found</h2>
	}

	const nextId = detail.productID + 1
	const prevId = detail.productID - 1

	return (
		<div className='productSection'>
			<div className='productShowCase'>
				<div className='productGallery'>
					<div className='productThumb'>
						<img src={detail.frontImg} alt={detail.productName} />
					</div>
				</div>

				<div className='productDetails'>
					<div className='productBreadcrumb'>
						<div className='breadcrumbLink'>
							<Link to='/'>Home</Link> / <Link to='/shop'>The Shop</Link>
						</div>

						<div className='prevNextLink'>
							<Link to={`/product/${prevId}`}>
								<GoChevronLeft />
								<p>Prev</p>
							</Link>

							<Link to={`/product/${nextId}`}>
								<p>Next</p>
								<GoChevronRight />
							</Link>
						</div>
					</div>

					<div className='productName'>
						<h1>{detail.productName}</h1>
					</div>

					<div className='productDescription'>
						<p>{detail.produtDescription}</p>
					</div>

					<div className='productCartQuantity'>
						<div className='productQuantity'>
							<button onClick={decrement}>-</button>
							<input type='text' value={quantity} onChange={handleInputChange} />
							<button onClick={increment}>+</button>
						</div>

						<div className='productCartBtn'>
							<button onClick={async (): Promise<void> => addToCart(detail.productID)} style={{ cursor: 'pointer' }}>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDeatlis
