/* eslint-disable multiline-ternary */
// eslint-disable-next-line multiline-ternary
import React, {
	useState,
} from 'react'
import './Filter.css'
import StoreData from '../../products/data'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import {
	IoIosArrowDown,
} from 'react-icons/io'
import {
	BiSearch,
} from 'react-icons/bi'
import Slider from '@mui/material/Slider'

const Filter:React.FC = () => {
	const [value, setValue,] = useState([20, 69,],)

	const [searchTerm, setSearchTerm,] = useState('',)

	const handleChange = (event:React.ChangeEvent<HTMLInputElement>, newValue: React.SetStateAction<Array<number>>,):void => {
		setValue(newValue,)
	}
	const filteredBrands = StoreData.filter((brand,) => {
		return brand.productName.toLowerCase().includes(searchTerm.toLowerCase(),)
	},
	)

	return (
		<div>
			<div className='filterSection'>
				<div className='filterCategories'>
				</div>
				<div className='filterColors'>

				</div>
				<div className='filterSizes'>
				</div>
				<div className='filterBrands'>
					<Accordion defaultExpanded disableGutters elevation={0}>
						<AccordionSummary
							expandIcon={<IoIosArrowDown size={20} />}
							aria-controls='panel1-content'
							id='panel1-header'
							sx={{
								padding: 0, marginBottom: 2,
							}}
						>
							<h5 className='filterHeading'>Brands</h5>
						</AccordionSummary>
						<AccordionDetails sx={{
							padding: 0,
						}}>
							{/* Search bar */}
							<div className='searchBar'>
								<BiSearch className='searchIcon' size={20} color={'#767676'} />
								<input
									type='text'
									placeholder='Search'
									value={searchTerm}
									onChange={(e,):void => {
										setSearchTerm(e.target.value,)
									}}
								/>
							</div>

							{/* Brand list */}
							<div className='brandList'>
								{filteredBrands.length > 0 ? (
									filteredBrands.map((brand, index,) => {
										return (
											<div className='brandItem' key={index}>
												{/* Radio button */}
												<input
													type='checkbox'
													name='brand'
													id={`brand-${index}`}
													className='brandRadio'
												/>
												{/* Brand name */}
												<label htmlFor={`brand-${index}`} className='brandLabel'>
													{brand.productName}
												</label>
												{/* Brand count */}
												<span className='brandCount'>{brand.count}</span>
											</div>
										)
									},)
								) : (
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
								padding: 0, marginBottom: 2,
							}}
						>
							<h5 className='filterHeading'>Price</h5>
						</AccordionSummary>
						<AccordionDetails sx={{
							padding: 0,
						}}>
							<div className='filterSliderPrice'>
								<div className='priceRange'>
									<p>
                    Min Price: <span>${value[0]}</span>
									</p>
									<p>
                    Max Price: <span>${value[1]}</span>
									</p>
								</div>
							</div>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</div>
	)
}

export default Filter
