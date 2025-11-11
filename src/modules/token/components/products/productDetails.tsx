import React from 'react'
import {
	useParams,
} from 'react-router-dom'
import StoreData from './data'
export const ProductDeatlis: React.FC = () => {
	const {
		id,
	} = useParams<{ id: string }>()

	const detail = StoreData.find((el,) => {
		return el.productID === Number(id,)
	},)

	if (!detail) {
		return <h2>not found</h2>
	}
	return (
		<div>
			<h5>{detail.productName}</h5>

			<p>${detail.productPrice}</p>

			<span>{detail.productReviews}</span>
		</div>
	)
}

export default ProductDeatlis
