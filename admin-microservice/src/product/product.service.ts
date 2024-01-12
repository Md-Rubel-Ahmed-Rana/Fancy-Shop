import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import {
  Repository,
  FindOneOptions,
  UpdateResult,
  DeleteResult,
} from 'typeorm';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class ProductService {
  private readonly client = ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://eoghmjcc:dawLE9Hqnmwe3hWzZ1D2pGI9fYqQr23l@shark.rmq.cloudamqp.com/eoghmjcc',
      ],
      queue: 'admin_queue',
    },
  });
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async products(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async createProduct(data: Product): Promise<Product> {
    this.client.emit('createProduct', data);
    return this.productRepository.save(data);
  }

  async getProduct(id: string): Promise<Product | null> {
    const options: FindOneOptions<Product> = { where: { id } };
    return this.productRepository.findOne(options);
  }

  async updateProduct(
    id: string,
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

  async deleteProduct(id: string): Promise<Product | null> {
    const deleteResult: DeleteResult = await this.productRepository.delete(id);

    if (deleteResult.affected && deleteResult.affected > 0) {
      const deletedProduct: Product = { id } as Product;
      return deletedProduct;
    } else {
      return null;
    }
  }
}
