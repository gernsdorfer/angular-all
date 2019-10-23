import { ListFilter } from './list-filer.model';

export interface CommentListFilter extends ListFilter {
  bookId: number;
}
