import { Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  private mockUser = '1'; // замінити на справжній userId коли буде auth

  @Get()
  getFavorites() {
    return this.favoritesService.getUserFavorites(this.mockUser);
  }

  @Post(':id')
  addFavorite(@Param('id') id: string) {
    return this.favoritesService.addToFavorites(this.mockUser, Number(id));
  }

  @Delete(':id')
  removeFavorite(@Param('id') id: string) {
    return this.favoritesService.removeFromFavorites(this.mockUser, Number(id));
  }
}
