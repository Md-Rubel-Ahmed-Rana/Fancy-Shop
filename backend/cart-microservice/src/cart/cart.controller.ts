import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CartProduct } from './cart.model';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post('/add')
  async addToCart(@Body() product: CartProduct) {
    const newProduct = await this.cartService.addToCart(product);
    return {
      statusCode: HttpStatus.CREATED,
      success: true,
      message: 'Your product added to cart',
      data: newProduct,
    };
  }

  @Get()
  async getAllCart() {
    const products = await this.cartService.getAllCart();
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Product cart fetched successfully!',
      data: products,
    };
  }

  @Get('/myCarts/:customerEmail')
  async myCarts(@Param('customerEmail') email: string) {
    const products = await this.cartService.myCarts(email);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'My carts fetched successfully!',
      data: products,
    };
  }

  @Patch('/:id')
  async incrementQuantity(@Param('id') id: string) {
    const products = await this.cartService.incrementQuantity(id);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Your cart quantity incremented successfully!',
      data: products,
    };
  }

  @Delete('/:id')
  async deleteCart(@Param('id') id: string) {
    const products = await this.cartService.deleteCart(id);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Your cart deleted successfully!',
      data: products,
    };
  }
}
