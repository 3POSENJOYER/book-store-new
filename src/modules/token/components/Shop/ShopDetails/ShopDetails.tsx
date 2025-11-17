import React, {
	useEffect, useState,
} from 'react'
import './ShopDetails.css'

import {
	FaCartPlus, FaStar,
} from 'react-icons/fa'
import {
	FaAngleLeft, FaAngleRight,
} from 'react-icons/fa6'
import {
	FiHeart,
} from 'react-icons/fi'
import {
	IoClose, IoFilterSharp,
} from 'react-icons/io5'
import {
	Link,
} from 'react-router-dom'
import StoreData from '../../../components/products/data'

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

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ShopDetailsProps {
  filtered: Array<Product>;
}

const ShopDetails: React.FC<ShopDetailsProps> = ({
	filtered,
},) => {
	const [isDrawerOpen, setIsDrawerOpen,] = useState(false,)
	const [selectSort, setSelectSort,] = useState('default',)
	const [products, setProducts,] = useState<Array<Product>>(filtered,)

	useEffect(() => {
		const sorted = [...filtered,]

		if (selectSort === 'lowToHigh') {
			sorted.sort((a, b,) => {
				return a.productPrice - b.productPrice
			},)
		}

		if (selectSort === 'highToLow') {
			sorted.sort((a, b,) => {
				return b.productPrice - a.productPrice
			},)
		}

		if (selectSort === 'a-z') {
			sorted.sort((a, b,) => {
				return a.productName.localeCompare(b.productName,)
			},)
		}

		if (selectSort === 'z-a') {
			sorted.sort((a, b,) => {
				return b.productName.localeCompare(a.productName,)
			},)
		}

		setProducts(sorted,)
	}, [selectSort, filtered,],)

	const scrollToTop = (): void => {
		window.scrollTo({
			top:      0,
			behavior: 'smooth',
		},)
	}

	const toggleDrawer = (): void => {
		setIsDrawerOpen(!isDrawerOpen,)
	}

	const closeDrawer = (): void => {
		setIsDrawerOpen(false,)
	}

	return (
		<>
			<div className='shopDetails'>
				<div className='shopDetailMain'>
					<div className='shopDetails__left'>
					</div>
					<div className='shopDetails__right'>
						<div className='shopDetailsSorting'>
							<div className='shopDetailsBreadcrumbLink'>
								<Link to='/' onClick={scrollToTop}>
                  Home
								</Link>
                &nbsp;/&nbsp;
								<Link to='/shop'>The Shop</Link>
							</div>
							<div className='filterLeft' onClick={toggleDrawer}>
								<IoFilterSharp />
								<p>Filter</p>
							</div>
							<div className='shopDetailsSort'>
								<select
									onChange={(e,): void => {
										setSelectSort(e.target.value,)
									}}
									name='sort'
									id='sort'
									value={selectSort}
								>
									<option value='default'>Default Sorting</option>
									<option value='a-z'>Alphabetically, A-Z</option>
									<option value='z-a'>Alphabetically, Z-A</option>
									<option value='lowToHigh'>Price, Low to high</option>
									<option value='highToLow'>Price, high to low</option>
								</select>
								<div className='filterRight' onClick={toggleDrawer}>
									<div className='filterSeprator'></div>
									<IoFilterSharp />
									<p>Filter</p>
								</div>
							</div>
						</div>
						<div className='shopDetailsProducts'>
							<div className='shopDetailsProductsContainer'>
								{products.slice(0, 6,).map((product: Product,) => {
									return (
										<div key={product.productID} className='sdProductContainer'>
											<div className='sdProductImages'>
												<Link to={`/product/${product.productID}`} onClick={scrollToTop}>
													<img
														src={product.frontImg}
														alt=''
														className='sdProduct_front'
													/>
													<img
														src={product.backImg}
														alt=''
														className='sdProduct_back'
													/>
												</Link>
												<h4>Add to Cart</h4>
											</div>
											<div className='sdProductImagesCart'>
												<FaCartPlus />
											</div>
											<div className='sdProductInfo'>
												<div className='sdProductCategoryWishlist'>
													<FiHeart />
												</div>
												<div className='sdProductNameInfo'>
													<Link to={`/product/${product.productID}`} onClick={scrollToTop}>
														<h5>{product.productName}</h5>
													</Link>

													<p>${product.productPrice}</p>
													<div className='sdProductRatingReviews'>
														<div className='sdProductRatingStar'>
															<FaStar color='#FEC78A' size={10} />
															<FaStar color='#FEC78A' size={10} />
															<FaStar color='#FEC78A' size={10} />
															<FaStar color='#FEC78A' size={10} />
															<FaStar color='#FEC78A' size={10} />
														</div>
														<span>{product.productReviews}</span>
													</div>
												</div>
											</div>
										</div>
									)
								},)}
							</div>
						</div>
						<div className='shopDetailsPagination'>
							<div className='sdPaginationPrev'>
								<p onClick={scrollToTop}>
									<FaAngleLeft />
                  Prev
								</p>
							</div>
							<div className='sdPaginationNumber'>
								<div className='paginationNum'>
									<p onClick={scrollToTop}>1</p>
									<p onClick={scrollToTop}>2</p>
									<p onClick={scrollToTop}>3</p>
									<p onClick={scrollToTop}>4</p>
								</div>
							</div>
							<div className='sdPaginationNext'>
								<p onClick={scrollToTop}>
                  Next
									<FaAngleRight />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`filterDrawer ${isDrawerOpen ?
				'open' :
				''}`}>
				<div className='drawerHeader'>
					<p>Filter By</p>
					<IoClose onClick={closeDrawer} className='closeButton' size={26} />
				</div>
				<div className='drawerContent'>
				</div>
			</div>
		</>
	)
}

export default ShopDetails