import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderItemComponent } from './header-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderLinkComponent', () => {
  let component: HeaderItemComponent;
  let fixture: ComponentFixture<HeaderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
