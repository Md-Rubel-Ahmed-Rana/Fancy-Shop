import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Item } from "./item.model";

@Schema({
  versionKey: false,
  toJSON: {
    virtuals: true,
  },
})
export class Order {
  @Prop()
  customerName: string;

  @Prop()
  deliveryAddress: string;

  @Prop()
  phoneNumber: string;

  @Prop({ type: [Item] })
  items: Item[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
