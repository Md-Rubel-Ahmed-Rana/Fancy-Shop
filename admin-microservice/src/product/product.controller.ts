import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

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

  @Post('/create')
  async createProduct(@Body() body: Product) {
    const product = await this.productService.createProduct(body);

    // send this data to main ms to write
    this.client.emit('create-product', body);
    return {
      success: true,
      statusCode: 201,
      message: 'Product created successfully',
      data: product,
    };
  }

  @Get('/:id')
  async getProduct(@Param() id: number) {
    const product = await this.productService.getProduct(id);
    return {
      success: true,
      statusCode: 200,
      message: 'Product fetched successfully',
      data: product,
    };
  }

  @Put('/update/:id')
  async updateProduct(@Param() id: number, @Body() body: Product) {
    const product = await this.productService.updateProduct(id, body);
    return {
      success: true,
      statusCode: 200,
      message: 'Product updated successfully',
      data: product,
    };
  }

  @Delete('/delete/:id')
  async deleteProduct(@Param() id: number) {
    const product = await this.productService.deleteProduct(id);
    return {
      success: true,
      statusCode: 200,
      message: 'Product deleted successfully',
      data: product,
    };
  }

  @Post('/:id/like')
  async like(@Param('id') id: number) {
    const product = await this.productService.getProduct(id);
    return this.productService.updateProduct(id, {
      likes: product.likes + 1,
    });
  }
}
