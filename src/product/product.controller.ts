import { Controller, Get, Query } from '@nestjs/common';
import { QueryDto } from '../dto/query.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly appService: ProductService) {}

  @Get('')
  async products(@Query() query: QueryDto): Promise<any> {
    console.log(query);
    return await this.appService.findProducts(query);
  }

  @Get('mock_data')
  async mock(): Promise<any> {
    await this.appService.mockData();
    return { messaga: 'success' };
  }
}
