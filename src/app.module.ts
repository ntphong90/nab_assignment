import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { LogController } from './log/log.controller';
import { LogService } from './log/log.service';
import { LogModule } from './log/log.module';
import { Log, LogSchema } from './schemas/log.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_HOST),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
    ProductModule,
    LogModule,
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.LOG_HOST,
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [AppController, ProductController, LogController],
  providers: [AppService, ProductService, LogService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('product');
  }
}
