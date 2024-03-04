import { Injectable, NotFoundException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { User } from "src/interfaces/user.interface";

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

  async findUser(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return user;
  }

  async users() {
    const data = await prisma.user.findMany({});
    return data;
  }
  async getUsernamesAndEmails() {
    const data = await prisma.user.findMany({});
    return data.map((user) => ({ username: user.username, email: user.email }));
  }

  async uploadProfile(id: string, imageUrl: string) {
    const data = await prisma.user.update({
      where: { id },
      data: { profileImage: imageUrl },
    });
    return data;
  }
}
