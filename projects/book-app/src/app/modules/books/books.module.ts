import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailContainerComponent } from './containers/detail/detail.container.component';
import { ListContainerComponent } from './containers/list/list.container.component';
import { BooksApiModule } from 'books-api';
import { UiModule } from 'ui';
import { MergeObjectPipe } from './pipes/merge-object.pipe';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    DetailContainerComponent,
    ListContainerComponent,
    MergeObjectPipe
  ],
  imports: [CommonModule, BooksRoutingModule, BooksApiModule, UiModule]
})
export class BooksModule {}
