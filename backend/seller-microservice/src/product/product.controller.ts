/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductValidator } from './product.validate';
import { EventPattern } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    const products = await this.productService.getAllProducts();
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Products found',
      data: products
    };
  }

  @Post('/add')
  async addProduct(@Body() product: ProductValidator) {
    const newProduct = await this.productService.addProduct(product);
    return {
      statusCode: HttpStatus.CREATED,
      success: true,
      message: 'Product added',
      data: newProduct
    };
  }

  @Get('/by-seller/:sellerId')
  async getBySellerId(@Param('sellerId') sellerId: string) {
    const products = await this.productService.getBySellerId(sellerId);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Product found',
      data: products
    };
  }

  @Get('/single/:id')
  async getSingleProduct(@Param('id') id: string) {
    const products = await this.productService.getSingleProduct(id);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Product found',
      data: products
    };
  }

  @Patch('/update/:id')
  async updateProduct(@Param('id') id: string, @Body() data: ProductValidator) {
    const product = await this.productService.updateProduct(id, data);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Product updated',
      data: product
    };
  }

  @Delete('/delete/:id')
  async deleteProduct(@Param('id') id: string) {
    await this.productService.deleteProduct(id);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Product deleted',
      data: null
    };
  }

  @EventPattern('approved-product')
  approvedProductEvent(data: any) {
    this.productService.approvedProductEvent(data);
  }
}
