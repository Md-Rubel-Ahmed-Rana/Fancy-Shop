import { UserService } from './user.service';
import { User } from '@prisma/client';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    users(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            id: string;
            fullName: string;
            username: string;
            password: string;
            email: string;
            profileImage: string;
        }[];
    }>;
    register(user: User): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            id: string;
            fullName: string;
            username: string;
            password: string;
            email: string;
            profileImage: string;
        };
    }>;
}
