/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ProductService } from './product.service';
import { HttpService } from '@nestjs/axios';
export declare class ProductController {
    private productService;
    private httpService;
    constructor(productService: ProductService, httpService: HttpService);
    getProducts(): Promise<{
        success: boolean;
        statusCode: number;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./product.model").Product> & import("./product.model").Product & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    createProduct(data: {
        title: string;
        image: string;
    }): Promise<{
        success: boolean;
        statusCode: number;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./product.model").Product> & import("./product.model").Product & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    like(id: number): Promise<import("mongoose").UpdateWriteOpResult>;
}
