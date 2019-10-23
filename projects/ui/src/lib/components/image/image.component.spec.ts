import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComponent } from './image.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ImageGalleryItemComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
