import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CartProduct } from './cart.model';
import { Model } from 'mongoose';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(CartProduct.name) private cartModel: Model<CartProduct>,
  ) {}

  async addToCart(product: CartProduct) {
    const newProduct = await this.cartModel.create(product);
    return newProduct;
  }
  async getAllCart() {
    const products = await this.cartModel.find({});
    return products;
  }

  async myCarts(customerEmail: string) {
    const products = await this.cartModel.find({ customerEmail });
    return products;
  }

  async incrementQuantity(id: string) {
    const product = await this.cartModel.findOne({ id });
    const products = await this.cartModel.findOneAndUpdate(
      { id },
      { $set: { quantity: product.quantity + 1 } },
      { new: true },
    );
    return products;
  }
  async deleteCart(id: string) {
    const product = await this.cartModel.findOneAndDelete({ id });
    return product;
  }
}
