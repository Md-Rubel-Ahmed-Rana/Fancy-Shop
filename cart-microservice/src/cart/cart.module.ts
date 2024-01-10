import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CartProduct, cartProductSchema } from './cart.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CartProduct.name, schema: cartProductSchema },
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
