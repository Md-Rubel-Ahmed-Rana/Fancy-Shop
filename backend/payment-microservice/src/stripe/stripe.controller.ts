import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { StripeService } from "./stripe.service";

@Controller("stripe")
export class StripeController {
  constructor(private stripeService: StripeService) {}

  @Post("/checkout")
  async checkout(@Body() data: any) {
    const result = await this.stripeService.checkout(data);

    return {
      statusCode: HttpStatus.CREATED,
      success: true,
      message: "Payment processing",
      data: result,
    };
  }

  @Post("/webhook")
  async stripeWebHook(@Body() data: any) {
    const result = await this.stripeService.checkout(data);

    return {
      statusCode: HttpStatus.CREATED,
      success: true,
      message: "Payment processing",
      data: result,
    };
  }
}
