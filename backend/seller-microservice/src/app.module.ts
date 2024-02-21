/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nest-seller-db:wzORUZiJi1Rc4OzV@cluster0.n72f5gi.mongodb.net/nest-seller-db?retryWrites=true&w=majority'
    ),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
