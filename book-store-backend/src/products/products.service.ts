// products/products.service.ts

import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';

// Це імітація ваших даних (StoreData)
const INITIAL_STORE_DATA: ProductDto[] = [
  {
    productID: 1,
    productName: 'The Great Gatsby',
    produtDescription: 'A classic novel of the Jazz Age.',
    frontImg: '/images/gatsby_front.jpg',
    backImg: '/images/gatsby_back.jpg',
    productPrice: 15.99,
    productReviews: '4.5 stars (120 reviews)',
  },
  {
    productID: 2,
    productName: 'To Kill a Mockingbird',
    produtDescription: 'A story about racial injustice in the American South.',
    frontImg: '/images/mockingbird_front.jpg',
    backImg: '/images/mockingbird_back.jpg',
    productPrice: 12.5,
    productReviews: '4.8 stars (95 reviews)',
  },
  // Додайте більше продуктів, які відповідають вашому StoreData
];

@Injectable()
export class ProductsService {
  private readonly products: ProductDto[] = INITIAL_STORE_DATA;

  findAll(): ProductDto[] {
    return this.products;
  }

  findOne(id: number): ProductDto | undefined {
    return this.products.find((product) => product.productID === id);
  }
}
