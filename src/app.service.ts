import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Request } from 'express';
import { QueryDto } from './dto/query.dto';

@Injectable()
export class AppService {
  constructor() { }
  getHello(): string {
    return 'Hello World!';
  }

}
