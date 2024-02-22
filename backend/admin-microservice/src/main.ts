import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const port = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  app.connectMicroservice({
    name: 'ADMIN_SERVICE',
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'admin',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'admin-consumer',
      },
    },
  });

  await app.startAllMicroservices();
  app.listen(port, () => {
    console.log(`Admin microservice is running on port: ${port}`);
  });
}
bootstrap();
