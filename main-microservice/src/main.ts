import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 5001;

console.log('Hello, I am from main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  await app.listen(port, () => {
    console.log(`Main Microservice is listening on port: ${port}`);
  });
}
bootstrap();
