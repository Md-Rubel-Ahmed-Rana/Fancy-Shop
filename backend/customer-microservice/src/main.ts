import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const port = process.env.PORT || 5001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1/');
  app.enableCors();
  app.connectMicroservice({
    name: 'CUSTOMER_SERVICE',
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'customer',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'customer-consumer',
      },
    },
  });

  await app.startAllMicroservices();
  app.listen(port, () => {
    console.log(`Customer Microservice is listening on port: ${port}`);
  });
}
bootstrap();
