import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CartDocument = HydratedDocument<CartItem>;

@Schema()
export class CartItem {
  @Prop({ required: true })
  productID: number;

  @Prop({ required: true, default: 1 })
  quantity: number;
}

export const CartSchema = SchemaFactory.createForClass(CartItem);
