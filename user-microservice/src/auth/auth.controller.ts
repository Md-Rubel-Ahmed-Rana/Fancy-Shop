import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "@prisma/client";
import { AuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("/login")
  async login(@Body() data: Partial<User>) {
    const result = await this.authService.login(data);
    return result;
  }

  @UseGuards(AuthGuard)
  @Get("/profile")
  async getProfile(@Request() req) {
    const user = await this.authService.profile(req.user.email);
    return user;
  }
}
