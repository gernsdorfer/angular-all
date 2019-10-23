import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, Books } from '../models/book.model';
import { map, mapTo } from 'rxjs/operators';
import { BOOK_ROOT_URL } from '../constants/book-root-url.constant';
import { BookListFilter } from '../models/book-list-filter.model';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {
  private resourceName = 'books';

  constructor(
    private httpClient: HttpClient,
    @Inject(BOOK_ROOT_URL) private rootUrl: string
  ) {}

  getAll({ page, itemsPerPage }: BookListFilter): Observable<Books> {
    const startIndex = (page - 1) * itemsPerPage;
    return this.httpClient
      .get<Book[]>(`${this.rootUrl}/${this.resourceName}`)
      .pipe(
        map((books) => ({
          books: books.slice(startIndex, startIndex + itemsPerPage),
          currentPage: page,
          pages: Math.ceil(books.length / itemsPerPage),
          total: books.length,
          itemsPerPage
        }))
      );
  }

  get(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(
      `${this.rootUrl}/${this.resourceName}/${bookId}`
    );
  }

  delete(bookId: number): Observable<number> {
    return this.httpClient
      .delete(`${this.rootUrl}/${this.resourceName}/${bookId}`)
      .pipe(mapTo(bookId));
  }

  update(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(
      `${this.rootUrl}/${this.resourceName}/${book.id}`,
      book
    );
  }

  add(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(
      `${this.rootUrl}/${this.resourceName}`,
      book
    );
  }
}
