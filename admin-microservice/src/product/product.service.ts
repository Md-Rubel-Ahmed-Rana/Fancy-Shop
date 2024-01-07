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

  async createProduct(data: Product): Promise<Product> {
    return this.productRepository.save(data);
  }

  async getProduct(id: number): Promise<Product | null> {
    const options: FindOneOptions<Product> = { where: { id } };
    return this.productRepository.findOne(options);
  }

  async updateProduct(
    id: number,
    data: Partial<Product>,
  ): Promise<Product | null> {
    const updateResult: UpdateResult = await this.productRepository.update(
      id,
      data,
    );

    if (updateResult.affected && updateResult.affected > 0) {
      const options: FindOneOptions<Product> = { where: { id } };
      const updatedProduct: Product | null =
        await this.productRepository.findOne(options);
      return updatedProduct;
    } else {
      return null;
    }
  }

  async deleteProduct(id: number): Promise<Product | null> {
    const deleteResult: DeleteResult = await this.productRepository.delete(id);

    if (deleteResult.affected && deleteResult.affected > 0) {
      const deletedProduct: Product = { id } as Product;
      return deletedProduct;
    } else {
      return null;
    }
  }
}
