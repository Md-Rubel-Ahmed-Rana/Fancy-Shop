import { User } from '@prisma/client';
export declare class UserService {
    register(data: User): Promise<{
        id: string;
        fullName: string;
        username: string;
        password: string;
        email: string;
        profileImage: string;
    }>;
    findUser(email: string): Promise<{
        id: string;
        fullName: string;
        username: string;
        password: string;
        email: string;
        profileImage: string;
    }>;
    users(): Promise<{
        id: string;
        fullName: string;
        username: string;
        password: string;
        email: string;
        profileImage: string;
    }[]>;
}
