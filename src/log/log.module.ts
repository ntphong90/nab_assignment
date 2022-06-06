import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';

import { Log, LogSchema } from 'src/schemas/log.schema';
import { LogService } from './log.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_HOST),
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
    LogModule,
    ClientsModule.register([
      { name: 'MATH_SERVICE', transport: Transport.TCP },
    ]),
  ],
  providers: [LogService],
})
export class LogModule {}
