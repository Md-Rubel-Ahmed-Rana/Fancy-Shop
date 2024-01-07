import { Product } from './product.entity';
import { Repository } from 'typeorm';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    products(): Promise<Product[]>;
    createProduct(data: Product): Promise<Product>;
    getProduct(id: number): Promise<Product | null>;
    updateProduct(id: number, data: Partial<Product>): Promise<Product | null>;
    deleteProduct(id: number): Promise<Product | null>;
}
