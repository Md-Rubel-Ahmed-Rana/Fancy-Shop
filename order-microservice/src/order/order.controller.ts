import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./order.model";

@Controller("order")
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post("/create")
  async createOrder(@Body() data: Order) {
    const order = await this.orderService.createOrder(data);
    return {
      statusCode: HttpStatus.CREATED,
      success: true,
      message: "Your order placed successfully!",
      data: order,
    };
  }
}
