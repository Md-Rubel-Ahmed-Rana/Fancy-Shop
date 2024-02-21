import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import {
  Repository,
  FindOneOptions,
  UpdateResult,
  DeleteResult,
} from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async products(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async newProduct(data: any) {
    await this.productRepository.save(data);
  }

  async getProduct(id: string): Promise<Product | null> {
    const options: FindOneOptions<Product> = { where: { id } };
    return this.productRepository.findOne(options);
  }

  async approveProduct(id: string): Promise<any> {
    await this.productRepository.update(
      { productId: id },
      { isApproved: true },
    );

    // send this product to customer microservice
    // approve this product for seller microservice
  }

  async updateProduct(data: Partial<Product>) {
    await this.productRepository.update({ productId: data.productId }, data);
  }

  async deleteProduct(data: Product) {
    await this.productRepository.delete({ productId: data.productId });

    // delete this product from customer microservice
  }
}
