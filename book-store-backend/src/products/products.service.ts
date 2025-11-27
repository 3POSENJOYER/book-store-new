import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';

const INITIAL_STORE_DATA = [
  {
    productID: 1,
    productName: 'The Great Gatsby',
    produtDescription: 'A classic novel of the Jazz Age.',
    frontImg:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg',
    backImg: 'https://m.media-amazon.com/images/I/71J15XgZJXL.jpg',
    productPrice: 15.99,
    productReviews: '4.5 stars (120 reviews)',
  },
  {
    productID: 2,
    productName: 'To Kill a Mockingbird',
    produtDescription: 'A story about racial injustice in the American South.',
    frontImg:
      'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg',
    backImg:
      'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg',
    productPrice: 12.5,
    productReviews: '4.8 stars (95 reviews)',
  },
];

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async onModuleInit() {
    const count = await this.productModel.countDocuments();
    if (count === 0) {
      console.log('База товарів порожня. Завантажую початкові дані...');
      await this.productModel.insertMany(INITIAL_STORE_DATA);
      console.log('Товари успішно додані в MongoDB!');
    }
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: number): Promise<Product | undefined> {
    const product = await this.productModel.findOne({ productID: id }).exec();
    return product || undefined;
  }
}
