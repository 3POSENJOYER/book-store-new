// @ts-nocheck
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true, unique: true })
  productID: number;

  @Prop({ required: true })
  productName: string;

  @Prop()
  produtDescription: string;

  @Prop()
  frontImg: string;

  @Prop()
  backImg: string;

  @Prop({ required: true })
  productPrice: number;

  @Prop()
  productReviews: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
