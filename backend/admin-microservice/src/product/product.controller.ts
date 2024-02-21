import { Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async allProducts() {
    const products = await this.productService.products();
    return {
      success: true,
      statusCode: 200,
      message: 'Products fetched successfully',
      data: products,
    };
  }

  @Patch('/approve/:productId')
  async approveProduct(@Param('productId') productId: string) {
    const product = await this.productService.approveProduct(productId);
    return {
      success: true,
      statusCode: 200,
      message: 'Product approved successfully',
      data: product,
    };
  }

  @EventPattern('new-product')
  async newProduct(data: any) {
    this.productService.newProduct(data);
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

  @EventPattern('update-product')
  async updateProduct(data: any) {
    this.productService.updateProduct(data);
  }

  @EventPattern('delete-product')
  async deleteProduct(data: any) {
    await this.productService.deleteProduct(data);
  }
}
