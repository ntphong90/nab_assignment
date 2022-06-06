import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, LogDocument } from 'src/schemas/log.schema';

@Injectable()
export class LogService {
  constructor(
    @InjectModel(Log.name) private logModel: Model<LogDocument>,
    @Inject('MATH_SERVICE') private client: ClientProxy,
  ) {}

  addEvent(identify: string, query: any): void {
    console.log(identify);
    this.client.emit<any>('log', JSON.stringify({ identify, query }));
  }

  async addLog(identify: string, query: any): Promise<void> {
    console.log(identify);
    this.logModel.insertMany({
      identify: identify,
      query: query,
    });
  }
}
