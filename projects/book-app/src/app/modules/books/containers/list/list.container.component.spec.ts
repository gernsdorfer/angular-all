import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContainerComponent } from './list.container.component';
import { ActivatedRoute } from '@angular/router';
import { defer, EMPTY } from 'rxjs';
import { cold } from 'jasmine-marbles';
import { BooksApiService, getMockBooks } from 'books-api';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ListQuerys } from '../../enums/query-params.enum';
import SpyObj = jasmine.SpyObj;

describe('ListComponent', () => {
  let component: ListContainerComponent;
  let fixture: ComponentFixture<ListContainerComponent>;
  const activatedRoute: Partial<ActivatedRoute> = {
    queryParams: EMPTY
  };
  let booksApiService: SpyObj<BooksApiService>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListContainerComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: defer(() => activatedRoute.queryParams)
          }
        },
        {
          provide: BooksApiService,
          useValue: jasmine.createSpyObj<BooksApiService>('booksApiService', {
            getAll: EMPTY
          })
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContainerComponent);
    booksApiService = TestBed.get(BooksApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('books$', () => {
    it('should read books', () => {
      const [querysParams$, getAll$, expected$] = [
        cold('-a-b', {
          a: {},
          b: { [ListQuerys.Page]: '2', [ListQuerys.ItemsPerPage]: '3' }
        }),
        cold('-a', { a: getMockBooks() }),
        cold('--a-a', { a: getMockBooks() })
      ];

      activatedRoute.queryParams = querysParams$;
      booksApiService.getAll.and.returnValue(getAll$);

      expect(component.books$).toBeObservable(expected$);
      expect(booksApiService.getAll.calls.allArgs()).toEqual([
        [{ page: 1, itemsPerPage: 10 }],
        [{ page: 2, itemsPerPage: 3 }]
      ]);
    });
  });
});
