import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Order } from "./order.model";
import { Model } from "mongoose";

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async createOrder(data: Order) {
    const order = await this.orderModel.create(data);
    return order;
  }
}
