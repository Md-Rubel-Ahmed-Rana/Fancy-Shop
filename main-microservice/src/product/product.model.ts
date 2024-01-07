import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop()
  id: number;

  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop({ default: 0 })
  likes: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
