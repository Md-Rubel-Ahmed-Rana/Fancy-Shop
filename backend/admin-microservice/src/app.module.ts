import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'nest-admin-db-mdrubelahmedrana521-c6df.a.aivencloud.com',
      port: 24497,
      username: 'avnadmin',
      password: 'AVNS_hnxCMtSe3xvOqt2ehT6',
      database: 'defaultdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
