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

  async getAllOrder() {
    const orders = await this.orderModel.find({});
    return orders;
  }

  async getMyOrders(customerEmail: string) {
    const orders = await this.orderModel.find({ customerEmail });
    return orders;
  }

  async cancelOrder(orderId: string, cancelReason: string) {
    const orders = await this.orderModel.findByIdAndUpdate(
      orderId,
      {
        $set: { status: "cancelled", cancelReason },
      },
      {
        new: true,
      },
    );
    return orders;
  }
}
