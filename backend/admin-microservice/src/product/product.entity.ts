import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column({ default: 0 })
  inStock: number;

  @Column({ default: 0 })
  ratings: number;
}
