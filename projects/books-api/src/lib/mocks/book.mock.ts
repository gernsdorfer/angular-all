import { Book, Books } from '../models/book.model';
import { getMockPagination } from './pagination.mock';

export const getMockBook = (book?: Partial<Book>): Book => ({
  id: 1,
  title: 'Clean Code',
  author: 'Robert Cecil Martin',
  preview: 'https://bilder.buecher.de/produkte/23/23888/23888404z.jpg',
  ...book
});

export const getMockBooks = (books?: Partial<Books>): Books => ({
  books: [getMockBook()],
  ...getMockPagination(),
  ...books
});
