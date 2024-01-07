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

  async createProduct(data: any) {
    const newProduct = await this.productModel.create(data);
    return newProduct;
  }

  async findOne(id: number) {
    return this.productModel.findOne({ id });
  }

  async like(id: number, likes: number) {
    return this.productModel.updateOne(
      { id },
      { $set: { likes } },
      { new: true },
    );
  }
}
