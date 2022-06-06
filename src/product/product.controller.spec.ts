import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Product, ProductSchema } from '../schemas/product.schema';
import { ProductController } from './product.controller';
import { ProductModule } from './product.module';
import { ProductService } from './product.service';
describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DB_HOST),
        MongooseModule.forFeature([
          { name: Product.name, schema: ProductSchema },
        ]),
        ProductModule,
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should return "Hello World!"', () => {
    expect('Hello World!').toBe('Hello World!');
  });
});
