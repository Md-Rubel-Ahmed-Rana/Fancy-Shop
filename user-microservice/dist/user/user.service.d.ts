import { User } from '@prisma/client';
export declare class UserService {
    register(data: User): Promise<{
        id: string;
        fullname: string;
        username: string;
        password: string;
        email: string;
    }>;
}
