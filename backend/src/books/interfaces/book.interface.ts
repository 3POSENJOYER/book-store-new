// src/books/interfaces/book.interface.ts
export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  cost: number;
  describe: string;
  coverImage?: string;
}
