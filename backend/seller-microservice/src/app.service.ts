/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Seller microservice health good',
      data: null
    };
  }
}
