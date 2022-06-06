import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type LogDocument = Log & Document;

@Schema()
export class Log {
  @Prop()
  identify: string;

  @Prop()
  query: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);
