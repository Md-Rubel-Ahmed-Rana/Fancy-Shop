import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const port = process.env.PORT || 6003;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  app.connectMicroservice({
    name: 'SELLER_SERVICE',
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'seller',
        brokers: ['localhost:9092']
      },
      consumer: {
        groupId: 'seller-consumer'
      }
    }
  });

  await app.startAllMicroservices();
  app.listen(port, () => {
    console.log(`Seller microservice is running on port:${port}`);
  });
}
bootstrap();
