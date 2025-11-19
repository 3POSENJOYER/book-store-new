import React, {
	useState, useEffect,
} from 'react'
import {
	Link, useParams,
} from 'react-router-dom'
import {
	FaStar,
} from 'react-icons/fa'
import {
	FiHeart,
} from 'react-icons/fi'
import {
	GoChevronLeft, GoChevronRight,
} from 'react-icons/go'
import {
	PiShareNetworkLight,
} from 'react-icons/pi'
import './product-detalis.css'

// Визначення інтерфейсу Product (повинно збігатися з ProductDto на бекенді)
interface IProduct {
    productID: number;
    productName: string;
    produtDescription: string;
    frontImg?: string;
    backImg?: string;
    productPrice: number;
    productReviews: string;
}

const API_BASE_URL = 'http://localhost:3000'

export const ProductDeatlis: React.FC = () => {
	const [quantity, setQuantity,] = useState(1,)
	// Стан для зберігання даних продукту, завантажених з API
	const [detail, setDetail,] = useState<IProduct | null>(null,)
	const [loading, setLoading,] = useState(true,)

	const {
		id,
	} = useParams<{ id: string }>()

	// --- 1. ФУНКЦІЯ ЗАВАНТАЖЕННЯ ДЕТАЛЕЙ ПРОДУКТУ З API ---
	useEffect(() => {
		if (!id) {
			return
		}

		const fetchProductDetail = async(): Promise<void> => {
			setLoading(true,)
			try {
				// Використовуємо GET /products/:id маршрут на NestJS
				const res = await fetch(`${API_BASE_URL}/products/${id}`,)

				if (res.status === 404) {
					setDetail(null,)
					setLoading(false,)
					return
				}

				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`,)
				}

				const data: IProduct = await res.json()
				setDetail(data,)
			} catch (err) {
				console.error('Failed to fetch product details:', err,)
				setDetail(null,)
			} finally {
				setLoading(false,)
			}
		}
		fetchProductDetail()
	}, [id,],)
	// ----------------------------------------------------------------------

	const increment = (): void => {
		setQuantity(quantity + 1,)
	}

	const decrement = (): void => {
		if (quantity > 1) {
			setQuantity(quantity - 1,)
		}
	}

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		const value = parseInt(event.target.value,)
		if (!isNaN(value,) && value > 0) {
			setQuantity(value,)
		}
	}

	const [clicked, setClicked,] = useState(false,)

	// --- Стан завантаження та Не знайдено ---
	if (loading) {
		return <h2>Loading product details...</h2>
	}

	if (!detail) {
		return <h2>Product with ID {id} not found</h2>
	}
	// ------------------------------------------

	const currentId = detail.productID
	const nextId = currentId + 1
	const prevId = currentId - 1

	return (
		<>
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
								<Link to='/'>Home</Link>&nbsp;/&nbsp;
								<Link to='/shop'>The Shop</Link>
							</div>
							<div className='prevNextLink'>
								{/* Використовуємо припущення, що ID є послідовними (тимчасово) */}
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
						{/* ... (інші деталі продукту, як і раніше) ... */}

						<div className='productDescription'>
							<p>
								{detail.produtDescription}
							</p>
						</div>

						{/* ... (інші секції) ... */}

						<div className='productCartQuantity'>
							<div className='productQuantity'>
								<button onClick={decrement}>-</button>
								<input
									type='text'
									value={quantity}
									onChange={handleInputChange}
								/>
								<button onClick={increment}>+</button>
							</div>
							<div className='productCartBtn'>
								<button>Add to Cart</button>
							</div>
						</div>

						{/* ... (решта розмітки) ... */}
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductDeatlis
