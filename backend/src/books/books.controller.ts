// src/books/books.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    console.log('Додавання нової книги:', createBookDto);
    return this.booksService.create(createBookDto);
  }

  // Сценарий 1: GET /books
  @Get()
  findAll() {
    console.log('Запрос всіх книг');
    return this.booksService.findAll();
  }

  // Сценарий 2: GET /books/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(`Запрос книги з ID: ${id}`);
    return this.booksService.findOne(id);
  }

  // Сценарий 4: PUT /books/:id
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: CreateBookDto,
  ) {
    console.log(`Оновлення книги з ID: ${id}`);
    return this.booksService.update(id, updateBookDto);
  }

  // Сценарий 5: DELETE /books/:id
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    console.log(`Видалення книги з ID: ${id}`);
    return this.booksService.remove(id);
  }
}
