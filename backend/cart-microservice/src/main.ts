import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 5003;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  await app.listen(port, () => {
    console.log(`Cart microservice is running on port: ${port}`);
  });
}
bootstrap();
