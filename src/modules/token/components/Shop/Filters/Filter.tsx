/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
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
	value1: Array<number>
	setValue1: React.Dispatch<React.SetStateAction<Array<number>>>
	min: number
	max: number
}

const Filter: React.FC<FilterProps> = ({ setFiltered, value1, setValue1, min, max }) => {
	const [allProducts, setAllProducts] = useState<Array<Product>>([])

	const [expanded, setExpanded] = useState<string | false>('author')
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedBrands, setSelectedBrands] = useState<Array<string>>([])

	const apiUrl = import.meta.env['VITE_API_URL'] || 'http://localhost:3000'

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch(`${apiUrl}/api/products`)
				if (res.ok) {
					const data = await res.json()
					setAllProducts(data)
				}
			} catch (err) {
				console.error('Error fetching products for filter:', err)
			}
		}
		fetchProducts()
	}, [apiUrl])

	useEffect(() => {
		setValue1([min, max])
	}, [min, max, setValue1])

	const handleChange = (panel: string) => {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		return (_event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false)
		}
	}

	const filteredBrands = allProducts.filter((brand) => {
		return brand.productName.toLowerCase().includes(searchTerm.toLowerCase())
	})

	const handleBrandChange = (brandName: string): void => {
		setSelectedBrands((prev) => {
			const newSelectedBrands = prev.includes(brandName)
				? prev.filter((brand) => brand !== brandName)
				: [...prev, brandName]

			if (newSelectedBrands.length === 0) {
				setFiltered(allProducts)
			} else {
				const filteredProducts = allProducts.filter((product) => {
					return newSelectedBrands.includes(product.productName)
				})
				setFiltered(filteredProducts)
			}

			return newSelectedBrands
		})
	}

	return (
		<div>
			<div className='filterSection'>
				<div className='filterCategories'></div>
				<div className='filterColors'></div>
				<div className='filterSizes'></div>
				<div className='filterBrands'>
					<Accordion expanded={expanded === 'author'} onChange={handleChange('author')} disableGutters elevation={0}>
						<AccordionSummary
							expandIcon={<IoIosArrowDown size={20} />}
							aria-controls='panel1-content'
							id='panel1-header'
							sx={{ padding: 0, marginBottom: 2 }}
						>
							<h5 className='filterHeading'>Author</h5>
						</AccordionSummary>
						<AccordionDetails sx={{ padding: 0 }}>
							<AuthorFilter setFiltered={setFiltered} />
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === 'bookName'}
						onChange={handleChange('bookName')}
						disableGutters
						elevation={0}
					>
						<AccordionSummary
							expandIcon={<IoIosArrowDown size={20} />}
							aria-controls='panel2-content'
							id='panel2-header'
							sx={{ padding: 0, marginBottom: 2 }}
						>
							<h5 className='filterHeading'>Book name</h5>
						</AccordionSummary>
						<AccordionDetails sx={{ padding: 0 }}>
							<div className='searchBar'>
								<BiSearch className='searchIcon' size={20} color={'#767676'} />
								<input
									type='text'
									placeholder='Search'
									value={searchTerm}
									onChange={(e): void => {
										setSearchTerm(e.target.value)
									}}
								/>
							</div>
							<div className='brandList'>
								{filteredBrands.length > 0 ? (
									filteredBrands.map((brand) => {
										return (
											<div className='brandItem' key={brand.productID}>
												<input
													type='checkbox'
													checked={selectedBrands.includes(brand.productName)}
													onChange={(): void => {
														handleBrandChange(brand.productName)
													}}
													id={`brand-${brand.productID}`}
													className='brandRadio'
												/>
												<label htmlFor={`brand-${brand.productID}`} className='brandLabel'>
													{brand.productName}
												</label>
												<span className='brandCount'>{brand.count || 0}</span>
											</div>
										)
									})
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
							aria-controls='panel3-content'
							id='panel3-header'
							sx={{ padding: 0, marginBottom: 2 }}
						>
							<h5 className='filterHeading'>Price</h5>
						</AccordionSummary>
						<AccordionDetails sx={{ padding: 0 }}>
							<PriceFilter setValue1={setValue1} value1={value1} min={min} max={max} />
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</div>
	)
}

export default Filter
