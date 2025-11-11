declare module './data' {
  interface Product {
    productID: number;
	  frontImg: string;
	  backImg: string;
    productName: string;
    productPrice: number;
    productReviews: string;
  }

  const StoreData: Product[];
  export default StoreData;
}
