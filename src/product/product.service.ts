import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';
import { Request } from 'express';
import { QueryDto } from '../dto/query.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  async findProducts(query: QueryDto): Promise<Product[]> {
    const regexQuery = {
      name: new RegExp(query.search, 'i'),
      brand: new RegExp(query.brand, 'i'),
      colors: new RegExp(query.color, 'i'),
    };
    let sortBy = 'createdAt';
    let sort = 'desc';
    if (query.sort_by) {
      sortBy = query.sort_by.toString();
      delete query.sort_by;
    }
    if (query.sort) {
      sort = query.sort.toString();
      delete query.sort;
    }
    return this.productModel
      .find(regexQuery)
      .sort((sort == 'desc' ? '-' : '') + sortBy)
      .exec();
  }

  async mockData(): Promise<void> {
    this.productModel.insertMany({
      name: 'ELASTIC LINEN BLEND SKIRT',
      price: 899000,
      brand: 'zara',
      tags: ['new'],
      colors: ['white'],
    });

    this.productModel.insertMany({
      name: 'JEAN',
      price: 100000,
      brand: 'hm',
      tags: ['new'],
      colors: ['red'],
    });

    this.productModel.insertMany({
      name: 'PULL',
      price: 30000,
      brand: 'pnb',
      tags: ['new'],
      colors: ['black'],
    });
  }
}
