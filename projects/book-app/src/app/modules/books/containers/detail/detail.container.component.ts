import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, BooksApiService, Comments, CommentsApiService } from 'books-api';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'book-app-detail-container',
  templateUrl: './detail.container.component.html'
})
export class DetailContainerComponent {
  book$: Observable<Book> = this.activatedRoute.params.pipe(
    switchMap(({ id }) => this.booksApi.get(id))
  );

  comments$: Observable<Comments> = this.activatedRoute.params.pipe(
    switchMap(({ id }) =>
      this.commentsApiService.getAll({
        bookId: parseInt(id, 10),
        page: 1,
        itemsPerPage: 10
      })
    )
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksApi: BooksApiService,
    private commentsApiService: CommentsApiService
  ) {}
}
