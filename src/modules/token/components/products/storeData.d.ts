declare module './data' {
	interface Product {
		productID: number
		frontImg: string
		backImg: string
		produtDescription: string
		productName: string
		author: string
		genre: string
		year: number
		productPrice: number
		count: number
		productReviews: string
	}

	const StoreData: Product[]
	export default StoreData
}
