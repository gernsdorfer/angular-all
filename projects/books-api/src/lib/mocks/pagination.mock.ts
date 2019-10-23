import { Pagination } from '../models/pagination.model';

export const getMockPagination = (
  pagination?: Partial<Pagination>
): Pagination => ({
  currentPage: 1,
  total: 3,
  pages: 4,
  itemsPerPage: 10,
  ...pagination
});
