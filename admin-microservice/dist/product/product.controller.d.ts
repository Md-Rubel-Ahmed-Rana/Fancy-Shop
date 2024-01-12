import { ProductService } from './product.service';
import { Product } from './product.entity';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
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
    getProduct(id: string): Promise<{
        success: boolean;
        statusCode: number;
        message: string;
        data: Product;
    }>;
    updateProduct(id: string, body: Product): Promise<{
        success: boolean;
        statusCode: number;
        message: string;
        data: Product;
    }>;
    deleteProduct(id: string): Promise<{
        success: boolean;
        statusCode: number;
        message: string;
        data: Product;
    }>;
    like(id: string): Promise<Product>;
}
