import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nest-product-microservice:tq9GnamuTIOxhkv3@cluster0.n72f5gi.mongodb.net/nest-product-ms?retryWrites=true&w=majority',
      {
        autoCreate: true,
      },
    ),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
