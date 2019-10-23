import { Comment, Comments } from '../models/comment.model';
import { getMockPagination } from './pagination.mock';

export const getMockComment = (comment?: Partial<Comment>): Comment => ({
  id: 1,
  message: 'some comment',
  bookId: 1,
  ...comment
});

export const getMockComments = (comments?: Partial<Comments>): Comments => ({
  comments: [getMockComment()],
  ...getMockPagination(),
  ...comments
});
