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
import { AuthGuard } from "./auth.guard";
import { User } from "src/interfaces/user.interface";

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
