import React from 'react'
import StoreData from './data'
export const Products: React.FC = () => {
// eslint-disable-next-line @typescript-eslint/naming-convention
interface Product {
  productID: number
  productName: string
  productPrice: number
  productReviews: string
}
return (
	<div>
		{StoreData.map((product:Product,) => {
			return (
				<div key={product.productID}>
					<h3>{product.productName}</h3>
					<p>${product.productPrice}</p>
				</div>
			)
		},)}
	</div>
)
}

