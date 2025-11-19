import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ServerDataController } from './server-data/server-data.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ServerDataController],
  providers: [AppService],
})
export class AppModule {}
