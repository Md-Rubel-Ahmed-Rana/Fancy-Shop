import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(data: Partial<User>) {
    const user = await this.userService.findUser(data.email);
    const isPasswordMatched = await bcrypt.compare(
      data.password,
      user.password,
    );
    if (!isPasswordMatched) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const jwtPayload = {
      id: user.id,
      email: user.email,
    };

    const accessToken = await this.jwtService.signAsync(jwtPayload);

    return { accessToken: `Bearer ${accessToken}`, user };
  }

  async profile(email: string): Promise<User> {
    const user = await this.userService.findUser(email);
    if (!user) {
      throw new UnauthorizedException("User does't exist");
    }

    delete user.password;
    return user;
  }
}
