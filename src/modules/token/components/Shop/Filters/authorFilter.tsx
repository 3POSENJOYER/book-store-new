/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useEffect, useState } from 'react'
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
	author: string
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface FilterProps {
	setFiltered: React.Dispatch<React.SetStateAction<Array<Product>>>
}

const AuthorFilter: React.FC<FilterProps> = ({ setFiltered }) => {
	const [allProducts, setAllProducts] = useState<Array<Product>>([])
	const [searchTerm] = useState('')
	const [selectedAuthor, setSelectedAuthor] = useState<Array<string>>([])

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
				console.error('Error loading authors:', err)
			}
		}
		fetchProducts()
	}, [apiUrl])

	const handleAuthorChange = (AuthorName: string): void => {
		setSelectedAuthor((prev) => {
			const newSelectedAuthor = prev.includes(AuthorName)
				? prev.filter((Author) => Author !== AuthorName)
				: [...prev, AuthorName]

			if (newSelectedAuthor.length === 0) {
				setFiltered(allProducts)
			} else {
				const filteredProducts = allProducts.filter((product) => {
					return product.author && newSelectedAuthor.includes(product.author)
				})
				setFiltered(filteredProducts)
			}

			return newSelectedAuthor
		})
	}

	const filteredAuthor = allProducts.filter((Author) => {
		return Author.author && Author.author.toLowerCase().includes(searchTerm.toLowerCase())
	})

	return (
		<div>
			<div className='brandList'>
				{filteredAuthor.length > 0 ? (
					filteredAuthor.map((Author) => {
						if (!Author.author) {
							return null
						}

						return (
							<div className='brandItem' key={Author.productID}>
								<input
									type='checkbox'
									checked={selectedAuthor.includes(Author.author)}
									onChange={(): void => {
										if (Author.author) {
											handleAuthorChange(Author.author)
										}
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
