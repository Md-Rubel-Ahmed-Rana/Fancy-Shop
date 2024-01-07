import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

console.log('Hello, I am from listener');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://eoghmjcc:dawLE9Hqnmwe3hWzZ1D2pGI9fYqQr23l@shark.rmq.cloudamqp.com/eoghmjcc',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.listen();
  console.log('Microservice is running');
}
bootstrap();
