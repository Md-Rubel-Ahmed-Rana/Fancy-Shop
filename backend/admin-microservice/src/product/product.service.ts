import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import {
  Repository,
  FindOneOptions,
  UpdateResult,
  DeleteResult,
} from 'typeorm';
import { ClientKafka } from '@nestjs/microservices';
import { ProductEventDto } from './product.event.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @Inject('CUSTOMER_SERVICE') private readonly customerClient: ClientKafka,
    @Inject('SELLER_SERVICE') private readonly sellerClient: ClientKafka,
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

    const options: FindOneOptions<Product> = { where: { productId: id } };
    const newProduct = await this.productRepository.findOne(options);

    // send this product to customer microservice
    this.customerClient.emit('new-product', new ProductEventDto(newProduct));
    // approve this product for seller microservice
    this.sellerClient.emit('approved-product', new ProductEventDto(newProduct));
  }

  async updateProduct(data: Partial<Product>) {
    await this.productRepository.update({ productId: data?.productId }, data);
    // update this product for customer microservice
  }

  async deleteProduct(data: Product) {
    await this.productRepository.delete({ productId: data.productId });

    // delete this product from customer microservice
  }
}
