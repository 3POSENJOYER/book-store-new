/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-alert */

import type {
	ChangeEvent,
} from 'react'
import React, {
	useState,
} from 'react'
import './addBook.css'

interface IProduct {
	productID: number
	frontImg: string
	backImg: string
	productDescription: string
	productName: string
	author: string
	genre: string
	year: number
	productPrice: number
	count: number
	productReviews: string
}

const AddBook: React.FC = () => {
	const [bookInfo, setBookInfo,] = useState<IProduct>({
		productID:          NaN,
		productName:        '',
		frontImg:           '',
		backImg:            '',
		productDescription: '',
		author:             '',
		genre:              '',
		year:               NaN,
		productPrice:       NaN,
		count:              NaN,
		productReviews:     '',
	},)

	// NEW: error + loading
	const [error, setError,] = useState<string>('',)
	const [loading, setLoading,] = useState<boolean>(false,)

	// handleChange — оновлює текстові та числові поля
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		const {
			name, value,
		} = e.target

		const numericFields = ['productID', 'year', 'productPrice', 'count',]

		setBookInfo((prev: IProduct,) => {
			return {
				...prev,
				[name]: numericFields.includes(name,) ?
					Number(value,) :
					value,
			}
		},)
	}

	// handleImageChange — завантаження зображення + preview (frontImg + backImg)
	const handleImageChange = (e: ChangeEvent<HTMLInputElement>,): void => {
		const {
			name, files,
		} = e.target
		const file = files?.[0]

		if (!file?.type.startsWith('image/',)) {
			alert('Please upload an image',)
			return
		}

		const reader = new FileReader()

		reader.onload = (): void => {
			const base64String = reader.result as string
			setBookInfo((prev,) => {
				return {
					...prev,
					[name]: base64String,
				}
			},)
		}

		reader.readAsDataURL(file,)
	}

	// UPDATED VALIDATION — тепер перевіряє всі поля правильно
	const validate = (): string | null => {
		// текстові поля
		if (!bookInfo.productName.trim()) {
			return 'Product name is required'
		}
		if (!bookInfo.author.trim()) {
			return 'Author is required'
		}
		if (!bookInfo.genre.trim()) {
			return 'Genre is required'
		}
		if (!bookInfo.productDescription.trim()) {
			return 'Description is required'
		}

		// числові поля
		if (!bookInfo.productID || isNaN(bookInfo.productID,) || bookInfo.productID <= 0) {
			return 'Product ID must be a valid number'
		}

		if (!bookInfo.year || isNaN(bookInfo.year,) || bookInfo.year <= 0) {
			return 'Year must be a valid number'
		}

		if (!bookInfo.productPrice || isNaN(bookInfo.productPrice,) || bookInfo.productPrice <= 0) {
			return 'Price must be a valid number'
		}

		if (!bookInfo.count || isNaN(bookInfo.count,) || bookInfo.count <= 0) {
			return 'Count must be a valid number'
		}

		// картинки
		if (!bookInfo.frontImg) {
			return 'Front image is required'
		}
		if (!bookInfo.backImg) {
			return 'Back image is required'
		}

		return null
	}

	// handleSubmit — відправка + loading + error state
	const handleSubmit = async(e: React.FormEvent,): Promise<void> => {
		e.preventDefault()

		setError('',)
		setLoading(true,)

		const validationError = validate()
		if (validationError) {
			setError(validationError,)
			setLoading(false,)
			return
		}

		try {
			await fetch('/api/upload', {
				method:  'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body:    JSON.stringify(bookInfo,),
			},)
		} catch {
			setError('Upload failed',)
		} finally {
			setLoading(false,)
		}
	}

	return (
		<form onSubmit={handleSubmit} className='addBookForm'>
			{/* error message */}
			{error && <p className='error'>{error}</p>}
			{/* loading indicator */}
			{loading && <p className='loading'>Uploading...</p>}

			<label>
				productID:
				<input
					type='number'
					name='productID'
					value={bookInfo.productID || ''}
					onChange={handleChange}
				/>
			</label>

			<label>
				productName:
				<input
					type='text'
					name='productName'
					value={bookInfo.productName}
					onChange={handleChange}
				/>
			</label>

			<label>
				frontImg:
				<input
					type='file'
					accept='image/*'
					name='frontImg'
					onChange={handleImageChange}
				/>
				{bookInfo.frontImg && (
					<img className='preview' src={bookInfo.frontImg} alt='front preview' />
				)}
			</label>

			<label>
				backImg:
				<input
					type='file'
					accept='image/*'
					name='backImg'
					onChange={handleImageChange}
				/>
				{bookInfo.backImg && (
					<img className='preview' src={bookInfo.backImg} alt='back preview' />
				)}
			</label>

			<label>
				productDescription:
				<textarea
					name='productDescription'
					value={bookInfo.productDescription}
					onChange={handleChange}
				/>
			</label>

			<label>
				author:
				<input
					type='text'
					name='author'
					value={bookInfo.author}
					onChange={handleChange}
				/>
			</label>

			<label>
				genre:
				<input
					type='text'
					name='genre'
					value={bookInfo.genre}
					onChange={handleChange}
				/>
			</label>

			<label>
				year:
				<input
					type='number'
					name='year'
					value={bookInfo.year || ''}
					onChange={handleChange}
				/>
			</label>

			<label>
				productPrice:
				<input
					type='number'
					name='productPrice'
					value={bookInfo.productPrice || ''}
					onChange={handleChange}
				/>
			</label>

			<label>
				count:
				<input
					type='number'
					name='count'
					value={bookInfo.count || ''}
					onChange={handleChange}
				/>
			</label>

			<label>
				productReviews:
				<textarea
					name='productReviews'
					value={bookInfo.productReviews}
					onChange={handleChange}
				/>
			</label>

			<button type='submit' disabled={loading}>
				{loading ?
					'Submitting...' :
					'Submit'}
			</button>
		</form>
	)
}

export default AddBook
