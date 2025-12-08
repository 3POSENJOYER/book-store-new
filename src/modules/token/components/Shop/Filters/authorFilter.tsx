import StoreData from '../../products/data'
import React, { useState } from 'react'
import './Filter.css'

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
const AuthorFilter: React.FC<FilterProps> = ({ setFiltered }) => {
	const [searchTerm] = useState('')
	const [selectedAuthor, setSelectedAuthor] = useState<Array<string>>([])
	const handleAuthorChange = (AuthorName: string): void => {
		setSelectedAuthor((prev) => {
			const newSelectedAuthor = prev.includes(AuthorName)
				? prev.filter((Author) => {
						return Author !== AuthorName
					})
				: [...prev, AuthorName]

			if (newSelectedAuthor.length === 0) {
				setFiltered(StoreData)
			} else {
				const filteredProducts = StoreData.filter((product) => {
					return newSelectedAuthor.includes(product.author)
				})
				setFiltered(filteredProducts)
			}

			return newSelectedAuthor
		})
	}
	const filteredAuthor = StoreData.filter((Author) => {
		return Author.author.toLowerCase().includes(searchTerm.toLowerCase())
	})
	return (
		<div>
			<div className='brandList'>
				{filteredAuthor.length > 0 ? (
					filteredAuthor.map((Author) => {
						return (
							<div className='brandItem' key={Author.productID}>
								<input
									type='checkbox'
									checked={selectedAuthor.includes(Author.author)}
									onChange={(): void => {
										handleAuthorChange(Author.author)
									}}
									id={`author-${Author.productID}`}
									className='brandRadio'
								/>
								<label htmlFor={`author-${Author.productID}`} className='brandLabel'>
									{Author.author}
								</label>
								<span className='brandCount'>{Author.count || 0}</span>
							</div>
						)
					})
				) : (
					<div className='notFoundMessage'>Not found</div>
				)}
			</div>
		</div>
	)
}

export default AuthorFilter
