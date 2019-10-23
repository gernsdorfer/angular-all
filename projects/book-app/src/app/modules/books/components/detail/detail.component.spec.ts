import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
