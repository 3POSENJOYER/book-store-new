import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 📌 Глобальний префікс API
  app.setGlobalPrefix('api');

  // 📌 Роздача статичних файлів (картинок)
  // /images/products/назва.jpg -> public/products/назва.jpg
  app.use('/images', express.static(join(__dirname, '..', 'public')));

  // 📌 CORS
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
