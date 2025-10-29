// src/books/books.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [
    {
      id: 1,
      title: '1984',
      author: 'Джордж Оруелл',
      year: 1949,
      cost: 200,
      describe:
        '«1984» — це роман-антиутопія Джорджа Орвелла, що зображує тоталітарне суспільство в державі Океанія під керівництвом Старшого Брата',
    },
    {
      id: 2,
      title: 'Кобзар',
      author: 'Тарас Шевченко',
      year: 1840,
      cost: 300,
      describe:
        '«Кобзар» — це збірка поетичних творів Тараса Шевченка, яка вперше вийшла 1840 року.',
    },
    {
      id: 3,
      title: 'Государь',
      author: 'Ніколло Макіавелі',
      year: 1513,
      cost: 300,
      describe:
        'Книга "Государ. Історія Флоренції ", - велика праця італійського дипломата і письменника Нікколо Макіавеллі. Вона припаде до душі любителям історії та політики, тим, хто цікавиться наукою політології та дипломатії.',
    },
  ];
  private nextBookId = 4;

  // Сценарий 3: Додати нову книгу (POST)
  create(createBookDto: CreateBookDto): Book {
    const newBook: Book = {
      id: this.nextBookId++,
      ...createBookDto, // title, author, year
    };
    this.books.push(newBook);
    return newBook;
  }

  // Сценарий 1: Отримати всі книги (GET)
  findAll(): Book[] {
    return this.books;
  }

  // Сценарий 2: Отримати одну книгу по ID (GET)
  findOne(id: number): Book {
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      throw new NotFoundException(`Книга з ID ${id} не знайдена`);
    }
    return book;
  }

  // Сценарий 4: Оновити книгу по ID (PUT/PATCH)
  update(id: number, updateBookDto: Partial<CreateBookDto>): Book {
    const bookIndex = this.books.findIndex((b) => b.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Книга з ID ${id} не знайдена`);
    }
    // Оновлюємо книгу
    this.books[bookIndex] = { ...this.books[bookIndex], ...updateBookDto };
    return this.books[bookIndex];
  }

  // Сценарий 5: Видалити книгу по ID (DELETE)
  remove(id: number): { message: string; book: Book } {
    const bookIndex = this.books.findIndex((b) => b.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Книга з ID ${id} не знайдена`);
    }
    const deletedBook = this.books.splice(bookIndex, 1);
    return { message: 'Книга вдало видалена', book: deletedBook[0] };
  }
}
