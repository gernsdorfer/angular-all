import { NgModule } from '@angular/core';
import { BOOK_ROOT_URL } from './constants/book-root-url.constant';

@NgModule({
  providers: [
    {
      provide: BOOK_ROOT_URL,
      useValue: 'http://localhost:3000'
    }
  ]
})
export class BooksApiModule {}
