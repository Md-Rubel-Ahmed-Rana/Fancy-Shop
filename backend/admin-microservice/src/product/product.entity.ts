import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  seller: string;

  @Column()
  productId: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  category: string;

  @Column('simple-array')
  images: string[];

  @Column({ default: 0 })
  inventory: number;

  @Column()
  shippingInfo: string;

  @Column()
  sku: string;

  @Column('simple-array')
  tags: string[];

  @Column()
  condition: string;

  @Column()
  warrantyInfo: string;

  @Column()
  returnPolicy: string;

  @Column({ default: false })
  isApproved?: boolean;
}
