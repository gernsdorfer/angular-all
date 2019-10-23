import { TestBed } from '@angular/core/testing';

import { BooksApiService } from './books-api.service';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { cold } from 'jasmine-marbles';
import { BOOK_ROOT_URL } from '../constants/book-root-url.constant';
import { CommentsApiService } from './comments-api.service';
import { getMockComment, getMockComments } from '../mocks/commen.mock';
import { getMockCommentListFilter } from '../mocks/comment-list-filter.mock';
import SpyObj = jasmine.SpyObj;

describe('BooksApiService', () => {
  let commentsApiService: CommentsApiService;
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
    commentsApiService = TestBed.get(CommentsApiService);
    httpClient = TestBed.get(HttpClient);
  });

  describe('getAll', () => {
    it('should return comments for a book', () => {
      const [get$, expected$] = [
        cold('-a', {
          a: [
            getMockComment({ id: 1, bookId: 2 }),
            getMockComment({ id: 2, bookId: 1 }),
            getMockComment({ id: 3, bookId: 1 }),
            getMockComment({ id: 4, bookId: 1 }),
            getMockComment({ id: 5, bookId: 1 }),
            getMockComment({ id: 6, bookId: 1 })
          ]
        }),
        cold('-a', {
          a: getMockComments({
            comments: [
              getMockComment({ id: 4, bookId: 1 }),
              getMockComment({ id: 5, bookId: 1 })
            ],
            currentPage: 2,
            pages: 3,
            total: 5,
            itemsPerPage: 2
          })
        })
      ];

      httpClient.get.and.returnValue(get$);

      expect(
        commentsApiService.getAll(
          getMockCommentListFilter({
            bookId: 1,
            page: 2,
            itemsPerPage: 2
          })
        )
      ).toBeObservable(expected$);
      expect(httpClient.get).toHaveBeenCalledWith(
        'http://localhost:3000/comments'
      );
    });
  });

  describe('add', () => {
    it('should add comment', () => {
      const [post$, expected$] = [
        cold('-a', { a: getMockComment({ id: 2 }) }),
        cold('-a', { a: getMockComment({ id: 2 }) })
      ];

      httpClient.post.and.returnValue(post$);

      expect(
        commentsApiService.add(getMockComment({ id: undefined }))
      ).toBeObservable(expected$);

      expect(httpClient.post).toHaveBeenCalledWith(
        `http://localhost:3000/comments`,
        getMockComment({ id: undefined })
      );
    });
  });
});
