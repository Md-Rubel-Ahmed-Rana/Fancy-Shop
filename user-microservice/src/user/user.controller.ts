import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async register(@Body() user: User) {
    const newUser = await this.userService.register(user);
    return {
      statusCode: 201,
      success: true,
      message: 'Registration successful',
      data: newUser,
    };
  }
}
