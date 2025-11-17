import React from 'react'
import {
	useState,
} from 'react'
import Filter from '../modules/token/components/Shop/Filters/Filter'
import '../modules/token/components/Shop/Filters/Filter.css'
import ShopDetails from '../modules/token/components/Shop/ShopDetails/ShopDetails'
import StoreData from '../modules/token/components/products/data'

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
	const [filtered, setFiltered,] = useState<Array<Product>>(StoreData,)

	return (
		<>
			<div className='container'>
				<Filter setFiltered={setFiltered}/>
				<ShopDetails filtered={filtered}/>
			</div>
		</>
	)
}

export default Shop