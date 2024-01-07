import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async register(data: User) {
    // hashing password
    const hashedPassword = await bcrypt.hash(data.password, 12);
    data.password = hashedPassword;
    const newUser = await prisma.user.create({
      data,
    });
    return newUser;
  }
}
