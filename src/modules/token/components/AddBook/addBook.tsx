
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

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		const {
			name, value,
		} = e.target

		const numericFields = ['productID', 'year', 'productPrice', 'count',]
		setBookInfo((prev,) => {
			return {
				...prev,
				[name]: numericFields.includes(name,) ?
					Number(value,) :
					value,
			}
		},)
	}
	const handleSubmit = async(e: React.FormEvent,):Promise<void> => {
		e.preventDefault()
	}
	return (
		<form onSubmit={handleSubmit} className='addBookForm'>

			<label>
      productID:
				<input
					type='number'
					name='productID'
					value={bookInfo.productID}
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
					type='text'
					name='frontImg'
					value={bookInfo.frontImg}
					onChange={handleChange}
				/>
			</label>

			<label>
      backImg:
				<input
					type='text'
					name='backImg'
					value={bookInfo.backImg}
					onChange={handleChange}
				/>
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
					value={bookInfo.year}
					onChange={handleChange}
				/>
			</label>

			<label>
      productPrice:
				<input
					type='number'
					name='productPrice'
					value={bookInfo.productPrice}
					onChange={handleChange}
				/>
			</label>

			<label>
      count:
				<input
					type='number'
					name='count'
					value={bookInfo.count}
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

			<button type='submit'>Submit</button>

		</form>
	)
}

export default AddBook
