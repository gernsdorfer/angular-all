import { getMockListFilter } from './list-filter.mock';
import { BookListFilter } from '../models';

export const getMockBookListFilter = (
  bookListFilter: Partial<BookListFilter>
): BookListFilter => ({
  ...getMockListFilter(),
  ...bookListFilter
});
