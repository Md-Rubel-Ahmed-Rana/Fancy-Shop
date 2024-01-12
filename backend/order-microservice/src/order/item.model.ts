import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ _id: false })
export class Item {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;
}
