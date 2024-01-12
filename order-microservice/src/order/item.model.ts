import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Item {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;
}
