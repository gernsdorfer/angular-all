import { CommentListFilter } from '../models/comment-list-filter.model';
import { getMockListFilter } from './list-filter.mock';

export const getMockCommentListFilter = (
  commentListFilter: Partial<CommentListFilter>
): CommentListFilter => ({
  bookId: 1,
  ...getMockListFilter(),
  ...commentListFilter
});
