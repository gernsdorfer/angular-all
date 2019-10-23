import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContainerComponent } from './detail.container.component';
import { ActivatedRoute } from '@angular/router';
import { defer, EMPTY } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { cold } from 'jasmine-marbles';
import {
  BooksApiService,
  CommentsApiService,
  getMockBook,
  getMockComment
} from 'books-api';
import SpyObj = jasmine.SpyObj;

describe('DetailComponent', () => {
  let component: DetailContainerComponent;
  let fixture: ComponentFixture<DetailContainerComponent>;

  const activatedRoute: Partial<ActivatedRoute> = {
    params: EMPTY
  };
  let booksApiService: SpyObj<BooksApiService>;
  let commentsApiService: SpyObj<CommentsApiService>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailContainerComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: defer(() => activatedRoute.params)
          }
        },
        {
          provide: BooksApiService,
          useValue: jasmine.createSpyObj<BooksApiService>('booksApiService', {
            get: EMPTY
          })
        },
        {
          provide: CommentsApiService,
          useValue: jasmine.createSpyObj<CommentsApiService>(
            'commentsApiService',
            {
              getAll: EMPTY
            }
          )
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContainerComponent);
    booksApiService = TestBed.get(BooksApiService);
    commentsApiService = TestBed.get(CommentsApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('book$', () => {
    it('should read the current book', () => {
      const [params$, get$, expected$] = [
        cold('-a', {
          a: { id: 1 }
        }),
        cold('-a', { a: getMockBook() }),
        cold('--a', { a: getMockBook() })
      ];

      activatedRoute.params = params$;
      booksApiService.get.and.returnValue(get$);

      expect(component.book$).toBeObservable(expected$);
      expect(booksApiService.get.calls.allArgs()).toEqual([[1]]);
    });
  });

  describe('comments', () => {
    it('should read commentzs for the current book', () => {
      const [params$, getAll$, expected$] = [
        cold('-a', {
          a: { id: '1' }
        }),
        cold('-a', { a: getMockComment() }),
        cold('--a', { a: getMockComment() })
      ];

      activatedRoute.params = params$;
      commentsApiService.getAll.and.returnValue(getAll$);

      expect(component.comments$).toBeObservable(expected$);
      expect(commentsApiService.getAll.calls.allArgs()).toEqual([
        [{ bookId: 1, page: 1, itemsPerPage: 10 }]
      ]);
    });
  });
});
