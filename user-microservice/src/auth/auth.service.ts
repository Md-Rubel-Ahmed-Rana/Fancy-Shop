import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

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
      throw new UnauthorizedException('Invalid credentials');
    }

    const jwtPayload = {
      id: user.id,
      email: user.email,
    };

    const accessToken = this.jwtService.sign(jwtPayload);

    return { accessToken, user };
  }
}
