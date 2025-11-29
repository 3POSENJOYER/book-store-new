import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products.module';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';

describe('Products Integration (e2e-like)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;
  let productModel: Model<Product>;

  // --- НАЛАШТУВАННЯ ПЕРЕД ВСІМА ТЕСТАМИ ---
  beforeAll(async () => {
    // 1. Запускаємо In-Memory MongoDB
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    // 2. Створюємо тестовий модуль
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MongooseModule.forRoot(uri), ProductsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // Отримуємо доступ до моделі, щоб засіяти дані
    productModel = moduleFixture.get<Model<Product>>(
      getModelToken(Product.name),
    );
  });

  afterAll(async () => {
    await app.close();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await productModel.deleteMany({});
  });

  // === ТЕСТИ ===

  it('/products (GET) - should return empty array initially', async () => {
    // Робимо запит GET /products
    return request(app.getHttpServer()).get('/products').expect(200).expect([]);
  });

  it('/products (GET) - should return products from DB', async () => {
    // 1. Додаємо тестовий товар прямо в базу
    await productModel.create({
      productID: 101,
      productName: 'Integration Test Book',
      productPrice: 50,
      produtDescription: 'Test Desc',
    });

    // 2. Робимо запит через контролер
    const response = await request(app.getHttpServer())
      .get('/products')
      .expect(200);

    // 3. Перевіряємо відповідь
    expect(response.body).toHaveLength(1);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(response.body[0].productName).toBe('Integration Test Book');
  });

  it('/products/:id (GET) - should return 404 for non-existing product', async () => {
    return request(app.getHttpServer()).get('/products/9999').expect(404);
  });
});
