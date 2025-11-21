import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import React, {
	useState,
} from 'react'
import {
	BiSearch,
} from 'react-icons/bi'
import {
	IoIosArrowDown,
} from 'react-icons/io'
import StoreData from '../../products/data'
import AuthorFilter from './authorFilter'
import './Filter.css'
import PriceFilter from './priceFilter'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Product {
	productID: number
	productName: string
	produtDescription: string
	frontImg?: string
	backImg?: string
	productPrice: number
	productReviews: string
	count?: number
}
// eslint-disable-next-line @typescript-eslint/naming-convention
interface FilterProps {
	setFiltered: React.Dispatch<React.SetStateAction<Array<Product>>>
}

const Filter: React.FC<FilterProps> = ({
	setFiltered,
},) => {
	const [searchTerm, setSearchTerm,] = useState('',)
	const [selectedBrands, setSelectedBrands,] = useState<Array<string>>([],)

	const filteredBrands = StoreData.filter((brand,) => {
		return brand.productName.toLowerCase().includes(searchTerm.toLowerCase(),)
	},)
	const handleBrandChange = (brandName: string,): void => {
		setSelectedBrands((prev,) => {
			const newSelectedBrands = prev.includes(brandName,) ?
				prev.filter((brand,) => {
					return brand !== brandName
				},) :
				[...prev, brandName,]

			if (newSelectedBrands.length === 0) {
				setFiltered(StoreData,)
			} else {
				const filteredProducts = StoreData.filter((product,) => {
					return newSelectedBrands.includes(product.productName,)
				},)
				setFiltered(filteredProducts,)
			}

			return newSelectedBrands
		},)
	}

	return (
		<div>
			<div className='filterSection'>
				<div className='filterCategories'></div>
				<div className='filterColors'></div>
				<div className='filterSizes'></div>
				<div className='filterBrands'>
					<Accordion defaultExpanded disableGutters elevation={0}>
						<AccordionSummary
							expandIcon={<IoIosArrowDown size={20} />}
							aria-controls='panel1-content'
							id='panel1-header'
							sx={{
								padding:      0,
								marginBottom: 2,
							}}
						>
							<h5 className='filterHeading'>Author</h5>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								padding: 0,
							}}
						>
							<AuthorFilter setFiltered={setFiltered} />
						</AccordionDetails>
					</Accordion>
					<Accordion defaultExpanded disableGutters elevation={0}>
						<AccordionSummary
							expandIcon={<IoIosArrowDown size={20} />}
							aria-controls='panel1-content'
							id='panel1-header'
							sx={{
								padding:      0,
								marginBottom: 2,
							}}
						>
							<h5 className='filterHeading'>Book name</h5>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								padding: 0,
							}}
						>
							<div className='searchBar'>
								<BiSearch className='searchIcon' size={20} color={'#767676'} />
								<input
									type='text'
									placeholder='Search'
									value={searchTerm}
									onChange={(e,): void => {
										setSearchTerm(e.target.value,)
									}}
								/>
							</div>
							<div className='brandList'>
								{filteredBrands.length > 0 ?
									(
										filteredBrands.map((brand,) => {
											return (
												<div className='brandItem' key={brand.productID}>
													<input
														type='checkbox'
														checked={selectedBrands.includes(brand.productName,)}
														onChange={(): void => {
															handleBrandChange(brand.productName,)
														}}
														id={`brand-${brand.productID}`}
														className='brandRadio'
													/>
													<label
														htmlFor={`brand-${brand.productID}`}
														className='brandLabel'
													>
														{brand.productName}
													</label>

													<span className='brandCount'>{brand.count || 0}</span>
												</div>
											)
										},)
									) :
									(
										<div className='notFoundMessage'>Not found</div>
									)}
							</div>
						</AccordionDetails>
					</Accordion>
				</div>
				<div className='filterPrice'>
					<Accordion defaultExpanded disableGutters elevation={0}>
						<AccordionSummary
							expandIcon={<IoIosArrowDown size={20} />}
							aria-controls='panel1-content'
							id='panel1-header'
							sx={{
								padding:      0,
								marginBottom: 2,
							}}
						>
							<h5 className='filterHeading'>Price</h5>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								padding: 0,
							}}
						>
							<PriceFilter />
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</div>
	)
}

export default Filter
