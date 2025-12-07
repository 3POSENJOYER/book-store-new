import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

import { ServerDataController } from './server-data/server-data.controller';

// ➕ Нові модулі
import { FavoritesModule } from './favorites/favorites.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://koufeed:A132465c@cluster1.tti5h.mongodb.net/bookstore?retryWrites=true&w=majority',
    ),

    ProductsModule,
    AuthModule,
    CartModule,

    // --- Додані нові модулі ---
    FavoritesModule,
    OrdersModule,
  ],
  controllers: [AppController, ServerDataController],
  providers: [AppService],
})
export class AppModule {}
