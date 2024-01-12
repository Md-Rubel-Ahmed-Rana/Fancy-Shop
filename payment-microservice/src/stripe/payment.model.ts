import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Payment {
  @Prop()
  orderId: string;

  @Prop()
  customerName: string;

  @Prop()
  paymentSessionId: string;

  @Prop({ default: "failed" })
  status: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
