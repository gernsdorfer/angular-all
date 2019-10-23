import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ListQuerys } from '../../enums/query-params.enum';
import SpyObj = jasmine.SpyObj;

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let router: SpyObj<Router>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [
        {
          provide: Router,
          useValue: jasmine.createSpyObj<Router>('Router', {
            navigate: undefined
          })
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('changePageSize', () => {
    it('should navigate to pageSize', () => {
      router.navigate.calls.reset();

      component.changePageSize(10);

      expect(router.navigate).toHaveBeenCalledWith([], {
        queryParams: {
          [ListQuerys.ItemsPerPage]: 10,
          [ListQuerys.Page]: 1
        },
        queryParamsHandling: 'merge'
      });
    });
  });
});
