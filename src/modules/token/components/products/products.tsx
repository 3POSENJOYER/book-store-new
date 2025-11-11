/* eslint-disable jsx-quotes */
import {
	useState,
} from 'react'
import React from 'react'
import StoreData from './data'
import {
	Link,
} from 'react-router-dom'

import './products.css'
export const Products: React.FC = () => {
	const [, setStoreData,] = useState<Product | null>(null,)

	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface Product {
		productID: number
		productName: string
		frontImg?: string
		backImg?: string
		productPrice: number
		productReviews: string
	}
	const addToCart = (id: number,): void => {
		const data = StoreData.find((el,) => {
			return el.productID === id
		},)
		if (data) {
			setStoreData(data,)
		}
	}
	const scrollToTop = (): void => {
		window.scrollTo({
			top:      0,
			behavior: 'smooth',
		},)
	}
	return (
		<div>
			{StoreData.map((product: Product,) => {
				return (
					<div className="trendyProductContainer" key={product.productID}>
						<div className="trendyProductImages">
							<Link to="/Product" onClick={scrollToTop}>
								<img
									src={product.frontImg}
									alt=""
									className="trendyProduct_front"
								/>
								<img
									src={product.backImg}
									alt=""
									className="trendyProduct_back"
								/>
							</Link>
							<h4 onClick={():void => {
								addToCart(product.productID,)
							}}>
								Add to cart
							</h4>
						</div>
						<div
							className="trendyProductImagesCart"
						>
						</div>
						<div className="trendyProductInfo">
							<div className="trendyProductCategoryWishlist">
								<p></p>
							</div>
							<div className="trendyProductNameInfo">
								<Link to={`/product/${product.productID}`} onClick={scrollToTop}>
									<h5>{product.productName}</h5>
								</Link>

								<p>${product.productPrice}</p>
								<div className="trendyProductRatingReviews">
									<div className="trendyProductRatingStar">

									</div>
									<span>{product.productReviews}</span>
								</div>
							</div>
						</div>
					</div>
				)
			},)}
		</div>
	)
}
