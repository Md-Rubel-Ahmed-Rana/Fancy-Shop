import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { HttpService } from '@nestjs/axios';

@Controller('/products')
export class ProductController {
  constructor(
    private productService: ProductService,
    private httpService: HttpService,
  ) {}

  @Get()
  async getProducts() {
    const products = await this.productService.getProducts();
    return {
      success: true,
      statusCode: 200,
      message: 'Products fetched successfully',
      data: products,
    };
  }

  @Get('/:id')
  async getProduct(@Param() id: string) {
    const product = await this.productService.getProduct(id);
    return {
      success: true,
      statusCode: 200,
      message: 'Product fetched successfully',
      data: product,
    };
  }

  async handleCreateProduct(data: string) {
    console.log(`RabbitMQ data: ${JSON.stringify(data)}`);
    const product = await this.productService.createProduct(data);
    return {
      success: true,
      statusCode: 201,
      message: 'Product created successfully',
      data: product,
    };
  }
}
