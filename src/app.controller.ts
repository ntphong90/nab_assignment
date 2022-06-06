import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { QueryDto } from './dto/query.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
