import { Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get(':userID')
  async getFavorites(@Param('userID') userID: string) {
    return this.favoritesService.getAll(userID);
  }

  @Post(':userID/:productID')
  async add(
    @Param('userID') userID: string,
    @Param('productID') productID: string,
  ) {
    return this.favoritesService.add(userID, Number(productID));
  }

  @Delete(':userID/:productID')
  async remove(
    @Param('userID') userID: string,
    @Param('productID') productID: string,
  ) {
    return this.favoritesService.remove(userID, Number(productID));
  }
}
