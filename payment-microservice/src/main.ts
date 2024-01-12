import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  app.enableCors({
    origin: ["http://localhost:3000"],
  });
  const configService = app.get(ConfigService);
  const port = configService.get<number>("PORT");
  await app.listen(port, () => {
    console.log(`Payment microservice is running on port: ${port}`);
  });
}
bootstrap();
