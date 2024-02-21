/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, toJSON: { virtuals: true } })
export class Product {
  @Prop()
  seller: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  category: string;

  @Prop()
  images: string[];

  @Prop()
  inventory: number;

  @Prop()
  shippingInfo: string;

  @Prop()
  sku: string;

  @Prop()
  tags: string[];

  @Prop()
  condition: string;

  @Prop()
  warrantyInfo: string;

  @Prop()
  returnPolicy: string;

  @Prop({ default: false })
  isApproved?: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
