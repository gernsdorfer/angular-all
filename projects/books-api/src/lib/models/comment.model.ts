import { Pagination } from './pagination.model';

export interface Comment {
  id: number;
  message: string;
  bookId: number;
}

export interface Comments extends Pagination {
  comments: Comment[];
}
