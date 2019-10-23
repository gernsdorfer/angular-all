import { TestBed } from '@angular/core/testing';

import { BooksApiService } from './books-api.service';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { cold } from 'jasmine-marbles';
import { getMockBook, getMockBooks } from '../mocks/book.mock';
import { BOOK_ROOT_URL } from '../constants/book-root-url.constant';
import { getMockBookListFilter } from '../mocks/book-list-filter.mock';
import SpyObj = jasmine.SpyObj;

describe('BooksApiService', () => {
  let booksApiService: BooksApiService;
  let httpClient: SpyObj<HttpClient>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: BOOK_ROOT_URL,
          useValue: 'http://localhost:3000'
        },
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj<HttpClient>('httpClient', {
            get: EMPTY,
            delete: EMPTY,
            put: EMPTY,
            post: EMPTY
          })
        }
      ]
    })
  );

  beforeEach(() => {
    booksApiService = TestBed.get(BooksApiService);
    httpClient = TestBed.get(HttpClient);
  });

  describe('getAll', () => {
    it('should return books', () => {
      const [get$, expected$] = [
        cold('-a', {
          a: [
            getMockBook({ id: 1 }),
            getMockBook({ id: 2 }),
            getMockBook({ id: 3 }),
            getMockBook({ id: 4 }),
            getMockBook({ id: 5 })
          ]
        }),
        cold('-a', {
          a: getMockBooks({
            books: [getMockBook({ id: 3 }), getMockBook({ id: 4 })],
            currentPage: 2,
            pages: 3,
            total: 5,
            itemsPerPage: 2
          })
        })
      ];

      httpClient.get.and.returnValue(get$);

      expect(
        booksApiService.getAll(
          getMockBookListFilter({ page: 2, itemsPerPage: 2 })
        )
      ).toBeObservable(expected$);
      expect(httpClient.get).toHaveBeenCalledWith(
        'http://localhost:3000/books'
      );
    });
  });

  describe('get', () => {
    it('should return book', () => {
      const [get$, expected$] = [
        cold('-a', { a: getMockBook() }),
        cold('-a', { a: getMockBook() })
      ];

      httpClient.get.and.returnValue(get$);

      expect(booksApiService.get(1)).toBeObservable(expected$);
      expect(httpClient.get).toHaveBeenCalledWith(
        'http://localhost:3000/books/1'
      );
    });
  });

  describe('delete', () => {
    it('should delete a book', () => {
      const [delete$, expected$] = [
        cold('-a', { a: undefined }),
        cold('-a', { a: 1 })
      ];

      httpClient.delete.and.returnValue(delete$);

      expect(booksApiService.delete(1)).toBeObservable(expected$);

      expect(httpClient.delete).toHaveBeenCalledWith(
        'http://localhost:3000/books/1'
      );
    });
  });

  describe('update', () => {
    it('should update book', () => {
      const [put$, expected$] = [
        cold('-a', { a: getMockBook({ title: 'new Title' }) }),
        cold('-a', { a: getMockBook({ title: 'new Title' }) })
      ];

      httpClient.put.and.returnValue(put$);

      expect(booksApiService.update(getMockBook())).toBeObservable(expected$);

      expect(httpClient.put).toHaveBeenCalledWith(
        `http://localhost:3000/books/${getMockBook().id}`,
        getMockBook()
      );
    });
  });

  describe('add', () => {
    it('should add book', () => {
      const [post$, expected$] = [
        cold('-a', { a: getMockBook({ id: 2 }) }),
        cold('-a', { a: getMockBook({ id: 2 }) })
      ];

      httpClient.post.and.returnValue(post$);

      expect(
        booksApiService.add(getMockBook({ id: undefined }))
      ).toBeObservable(expected$);

      expect(httpClient.post).toHaveBeenCalledWith(
        `http://localhost:3000/books`,
        getMockBook({ id: undefined })
      );
    });
  });
});
