import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductController {
    private productService;
    private readonly client;
    constructor(productService: ProductService, client: ClientProxy);
    allProducts(): Promise<{
        success: boolean;
        statusCode: number;
        message: string;
        data: Product[];
    }>;
    createProduct(body: Product): Promise<{
        success: boolean;
        statusCode: number;
        message: string;
        data: Product;
    }>;
    getProduct(id: number): Promise<{
        success: boolean;
        statusCode: number;
        message: string;
        data: Product;
    }>;
    updateProduct(id: number, body: Product): Promise<{
        success: boolean;
        statusCode: number;
        message: string;
        data: Product;
    }>;
    deleteProduct(id: number): Promise<{
        success: boolean;
        statusCode: number;
        message: string;
        data: Product;
    }>;
    like(id: number): Promise<Product>;
}
