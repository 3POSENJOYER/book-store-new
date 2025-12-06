import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorite, FavoriteDocument } from './schemas/favorite.schema';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorite.name) private favoriteModel: Model<FavoriteDocument>,
  ) {}

  async getAll(userID: string) {
    return this.favoriteModel.find({ userID }).exec();
  }

  async add(userID: string, productID: number) {
    return this.favoriteModel.create({ userID, productID });
  }

  async remove(userID: string, productID: number) {
    return this.favoriteModel.deleteOne({ userID, productID });
  }
}
