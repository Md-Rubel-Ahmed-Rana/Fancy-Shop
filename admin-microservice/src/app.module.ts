import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql12.freesqldatabase.com',
      port: 3306,
      username: 'sql12675142',
      password: 'W51dEHbyBM',
      database: 'sql12675142',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*
Host: sql12.freesqldatabase.com
Database name: sql12675142
Database user: sql12675142
Database password: W51dEHbyBM
Port number: 3306

*/
