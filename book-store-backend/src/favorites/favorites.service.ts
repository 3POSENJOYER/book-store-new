import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorite } from './schemas/favorite.schema';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorite.name)
    private favoriteModel: Model<Favorite>,
  ) {}

  async getUserFavorites(userId: string) {
    const fav = await this.favoriteModel.findOne({ userId });

    if (!fav) {
      return [];
    }

    return fav.productIds;
  }

  async addToFavorites(userId: string, productId: number) {
    const fav = await this.favoriteModel.findOneAndUpdate(
      { userId },
      { $addToSet: { productIds: productId } },
      { new: true, upsert: true },
    );

    return fav.productIds;
  }

  async removeFromFavorites(userId: string, productId: number) {
    const fav = await this.favoriteModel.findOneAndUpdate(
      { userId },
      { $pull: { productIds: productId } },
      { new: true },
    );

    if (!fav) {
      throw new NotFoundException('Favorites not found');
    }

    return fav.productIds;
  }
}
