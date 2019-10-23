import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BOOK_ROOT_URL } from '../constants/book-root-url.constant';
import { Comment, Comments } from '../models/comment.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsApiService {
  private resourceName = 'comments';

  constructor(
    private httpClient: HttpClient,
    @Inject(BOOK_ROOT_URL) private rootUrl: string
  ) {}

  getAll(filter: {
    bookId: number;
    page: number;
    itemsPerPage: number;
  }): Observable<Comments> {
    const startIndex = (filter.page - 1) * filter.itemsPerPage;
    return this.httpClient
      .get<Comment[]>(`${this.rootUrl}/${this.resourceName}`)
      .pipe(
        map((comments) =>
          comments.filter(({ bookId }) => bookId === filter.bookId)
        ),
        map((comments) => ({
          comments: comments.slice(
            startIndex,
            startIndex + filter.itemsPerPage
          ),
          currentPage: filter.page,
          pages: Math.ceil(comments.length / filter.itemsPerPage),
          total: comments.length,
          itemsPerPage: filter.itemsPerPage
        }))
      );
  }

  add(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(
      `${this.rootUrl}/${this.resourceName}`,
      comment
    );
  }
}
