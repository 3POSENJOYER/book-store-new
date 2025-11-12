import React, {
	useState,
} from 'react'
import {
	Link, useParams,
} from 'react-router-dom'
import StoreData from './data'

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
export const ProductDeatlis: React.FC = () => {
	const [quantity, setQuantity,] = useState(1,)

	const last = StoreData[StoreData.length - 1]!.productID

	const increment = (): void => {
		setQuantity(quantity + 1,)
	}

	const decrement = (): void => {
		if (quantity > 1) {
			setQuantity(quantity - 1,)
		}
	}
	const {
		id,
	} = useParams<{ id: string }>()
	const [clicked, setClicked,] = useState(false,)
	const detail = StoreData.find((el,) => {
		return el.productID === Number(id,)
	},)
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		const value = parseInt(event.target.value,)
		if (!isNaN(value,) && value > 0) {
			setQuantity(value,)
		}
	}
	if (!detail) {
		return <h2>not found</h2>
	}
	return (
		<>
			<div className='productSection'>
				<div className='productShowCase'>
					<div className='productGallery'>
						<div className='productThumb'>
							<img src={detail.frontImg} />
						</div>
					</div>
					<div className='productDetails'>
						<div className='productBreadcrumb'>
							<div className='breadcrumbLink'>
								<Link to='/'>Home</Link>&nbsp;/&nbsp;
								<Link to='/shop'>The Shop</Link>
							</div>
							<div className='prevNextLink'>
								<Link
									to={
										detail.productID === 1 ?
											`/product/${last}` :
											`/product/${detail.productID - 1}`
									}
								>
									<GoChevronLeft />
									<p>Prev</p>
								</Link>

								<Link
									to={
										detail.productID === last ?
											`/product/1` :
											`/product/${detail.productID + 1}`
									}
								>
									<p>Next</p>
									<GoChevronRight />
								</Link>
							</div>
						</div>
						<div className='productName'>
							<h1>{detail.productName}</h1>
						</div>
						<div className='productRating'>
							<FaStar color='#FEC78A' size={10} />
							<FaStar color='#FEC78A' size={10} />
							<FaStar color='#FEC78A' size={10} />
							<FaStar color='#FEC78A' size={10} />
							<FaStar color='#FEC78A' size={10} />
							<p>{detail.productReviews}</p>
						</div>
						<div className='productPrice'>
							<h3>{detail.productPrice}$</h3>
						</div>
						<div className='productDescription'>
							<p>
								{detail.produtDescription}
							</p>
						</div>
						<div className='productSizeColor'></div>
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
						<div className='productWishShare'>
							<div className='productWishList'>
								<button>
									<FiHeart color={clicked ?
										'red' :
										''} size={17} />
									<p>Add to Wishlist</p>
								</button>
							</div>
							<div className='productShare'>
								<PiShareNetworkLight size={22} />
								<p>Share</p>
							</div>
						</div>
						<div className='productTags'>
							<p>
								<span>SK</span>
							</p>
							<p>
								<span>CATEGORIES: </span>
							</p>
							<p>
								<span>TAGS: </span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductDeatlis
