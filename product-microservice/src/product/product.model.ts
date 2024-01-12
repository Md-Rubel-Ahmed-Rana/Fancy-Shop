import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  image: string;

  @Prop({ default: 1 })
  inStock: number;

  @Prop({ default: 0 })
  ratings: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
