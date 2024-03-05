import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const port = process.env.PORT || 6001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port, () => {
    console.log(`User microservice is running on port: ${port}`);
  });
}
bootstrap();
