import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

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

  @EventPattern('new-product')
  async newProduct(data: any) {
    console.log('New Product from admin', data);
    this.productService.newProduct(data);
  }
}
