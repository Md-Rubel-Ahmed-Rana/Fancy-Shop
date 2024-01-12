import { Product } from './product.entity';
import { Repository } from 'typeorm';
export declare class ProductService {
    private readonly productRepository;
    private readonly client;
    constructor(productRepository: Repository<Product>);
    products(): Promise<Product[]>;
    createProduct(data: Product): Promise<Product>;
    getProduct(id: string): Promise<Product | null>;
    updateProduct(id: string, data: Partial<Product>): Promise<Product | null>;
    deleteProduct(id: string): Promise<Product | null>;
}
