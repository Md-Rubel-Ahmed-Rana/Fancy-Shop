import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import Stripe from "stripe";
import { Payment } from "./payment.model";

@Injectable()
export class StripeService {
  constructor(
    private configService: ConfigService,
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}

  async checkout(items: any) {
    const stripe = new Stripe(
      this.configService.get<string>("STRIPE_SECRET_KEY"),
    );

    const storedData = items.map((item: any) => {
      if (item.quantity) {
        item.quantity = item.quantity >= 1 ? item.quantity : 1;
      } else {
        item.quantity = 1;
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: storedData,
      success_url: this.configService.get<string>("SUCCESS_URL"),
      cancel_url: this.configService.get<string>("CANCEL_URL"),
    });

    // call order microservice to store order data

    const order = {
      orderId: "sdf4hba4sdg4jkh4asd4fk",
      customerName: "as5fma5bsd5f",
      paymentSessionId: session.id,
    };

    await this.paymentModel.create(order);

    return { url: session.url, session };
  }

  async stripeWebHook(event: any) {
    switch (event.type) {
      case "checkout.session.completed":
        const payment = event.data.object;
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }
}
