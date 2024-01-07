"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const port = process.env.PORT || 5000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.enableCors({
        origin: 'http://localhost:3000',
    });
    await app.listen(port, () => {
        console.log(`Admin microservice is running on port: ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map