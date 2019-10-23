import { ListFilter } from '../models/list-filer.model';

export const getMockListFilter = (
  listFilter?: Partial<ListFilter>
): ListFilter => ({
  page: 1,
  itemsPerPage: 2,
  ...listFilter
});
