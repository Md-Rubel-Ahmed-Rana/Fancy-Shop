import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async users() {
    const data = await this.userService.users();
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Users fetched successful",
      data: data,
    };
  }
  @Get("/uniqueData")
  async getUsernamesAndEmails() {
    const data = await this.userService.getUsernamesAndEmails();
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Users fetched successful",
      data: data,
    };
  }

  @Post("/register")
  async register(@Body() user: User) {
    const newUser = await this.userService.register(user);
    return {
      statusCode: HttpStatus.CREATED,
      success: true,
      message: "Registration successful",
      data: newUser,
    };
  }
  @Patch("/uploadProfile/:id")
  async uploadProfile(
    @Body() body: { profileImage: string },
    @Param("id") id: string,
  ) {
    const newUser = await this.userService.uploadProfile(id, body.profileImage);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Profile image upload successful",
      data: newUser,
    };
  }
}
