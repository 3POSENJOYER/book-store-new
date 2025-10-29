// src/books/dto/create-book.dto.ts
export class CreateBookDto {
  title: string;
  author: string;
  year: number;
  cost: number;
  describe: string;
  coverImage?: string;
}
