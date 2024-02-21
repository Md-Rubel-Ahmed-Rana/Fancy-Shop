import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const port = process.env.PORT || 5002;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  app.enableCors();
  await app.listen(port, () => {
    console.log(`Nest user microservice is running on port: ${port}`);
  });
}
bootstrap();
