import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Welcome from admin microservice',
      data: null,
    };
  }
}
