import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async getProducts() {
    const products = await this.productModel.find({});
    return products;
  }

  async newProduct(data: any) {
    await this.productModel.create(data);
  }

  async getProduct(id: string) {
    return this.productModel.findOne({ id });
  }

  async findOne(id: string) {
    return this.productModel.findOne({ id });
  }
}
