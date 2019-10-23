import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ListQuerys } from '../../enums/query-params.enum';
import { map, switchMap } from 'rxjs/operators';
import { BookListFilter, Books, BooksApiService } from 'books-api';

@Component({
  selector: 'book-app-list-container',
  templateUrl: './list.container.component.html'
})
export class ListContainerComponent {
  books$: Observable<Books> = this.activatedRoute.queryParams.pipe(
    map((queryParams) => this.getFiltersFromParams(queryParams)),
    switchMap((listFilter) => this.booksApi.getAll(listFilter))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksApi: BooksApiService
  ) {}

  private getFiltersFromParams(params: Params): BookListFilter {
    return {
      page: parseInt(params[ListQuerys.Page], 10) || 1,
      itemsPerPage: parseInt(params[ListQuerys.ItemsPerPage], 10) || 10
    };
  }
}
