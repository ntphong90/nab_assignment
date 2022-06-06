import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  colors: string[];

  @Prop()
  tags: string[];

  @Prop()
  brand: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
