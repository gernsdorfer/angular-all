import { Pagination } from './pagination.model';

export interface Book {
  id: number;
  title: string;
  author: string;
  preview: string;
}

export interface Books extends Pagination {
  books: Book[];
}
