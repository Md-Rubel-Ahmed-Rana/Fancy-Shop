import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';
import { HttpService } from '@nestjs/axios';

@Controller('products')
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

  @EventPattern('create-product')
  async createProduct(data: { title: string; image: string }) {
    console.log(`RabbitMQ data: ${data}`);
    const product = await this.productService.createProduct(data);
    return {
      success: true,
      statusCode: 201,
      message: 'Product created successfully',
      data: product,
    };
  }

  @Post('/:id/like')
  async like(@Param('id') id: number) {
    const product = await this.productService.findOne(id);
    this.httpService
      .post(`http://localhost:5000/api/v1/products/${id}/like`, {})
      .subscribe((res) => {
        console.log('Axios response', res);
      });

    return this.productService.like(id, product.likes + 1);
  }
}
