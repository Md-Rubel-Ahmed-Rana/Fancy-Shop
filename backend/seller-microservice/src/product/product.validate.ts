/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, IsArray } from 'class-validator';

export class ProductValidator {
  @IsNotEmpty()
  @IsString()
  seller: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsArray()
  images: string[];

  @IsNotEmpty()
  @IsNumber()
  inventory: number;

  @IsNotEmpty()
  @IsString()
  shippingInfo: string;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsArray()
  tags: string[];

  @IsNotEmpty()
  @IsString()
  condition: string;

  @IsNotEmpty()
  @IsString()
  warrantyInfo: string;

  @IsNotEmpty()
  @IsString()
  returnPolicy: string;
}
