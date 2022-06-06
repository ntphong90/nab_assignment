import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../schemas/product.schema';
import { ProductService } from './product.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_HOST),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ProductModule,
  ],
  providers: [ProductService],
})
export class ProductModule {}
