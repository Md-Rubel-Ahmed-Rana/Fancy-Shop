import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async users() {
    const data = await this.userService.users();
    return {
      statusCode: 200,
      success: true,
      message: 'Users fetched successful',
      data: data,
    };
  }

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
