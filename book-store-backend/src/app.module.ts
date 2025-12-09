import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { FavoritesModule } from './favorites/favorites.module';
import { OrdersModule } from './orders/orders.module';
import { ServerDataController } from './server-data/server-data.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/book-store-new',
    }),

    MongooseModule.forRoot(
      'mongodb+srv://koufeed:A132465c@cluster1.tti5h.mongodb.net/bookstore?retryWrites=true&w=majority',
    ),

    ProductsModule,
    AuthModule,
    CartModule,
    FavoritesModule,
    OrdersModule,
  ],
  controllers: [AppController, ServerDataController],
  providers: [AppService],
})
export class AppModule {}
