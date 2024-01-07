"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
console.log('Hello, I am from listener');
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
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
//# sourceMappingURL=listener.js.map