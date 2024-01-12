import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./order.model";

@Controller("order")
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  async getAllOrder() {
    const order = await this.orderService.getAllOrder();
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Orders fetched successfully!",
      data: order,
    };
  }

  @Get("/myOrders/:customerEmail")
  async getMyOrders(@Param("customerEmail") email: string) {
    const order = await this.orderService.getMyOrders(email);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Your orders fetched successfully!",
      data: order,
    };
  }

  @Post("/create")
  async createOrder(@Body() data: Order) {
    const order = await this.orderService.createOrder(data);

    // need to call delivery microservice to track order
    return {
      statusCode: HttpStatus.CREATED,
      success: true,
      message: "Your order placed successfully!",
      data: order,
    };
  }

  @Patch("/cancel/:orderId")
  async cancelOrder(
    @Param("orderId") orderId: string,
    @Body() body: { cancelReason: string },
  ) {
    const order = await this.orderService.cancelOrder(
      orderId,
      body.cancelReason,
    );
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Your order has been cancelled!",
      data: order,
    };
  }
}
