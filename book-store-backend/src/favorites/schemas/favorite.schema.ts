import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Favorite {
  @Prop({ required: true })
  userID: string;

  @Prop({ required: true })
  productID: number;
}

export type FavoriteDocument = Favorite & Document;
export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
