import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailContainerComponent } from './containers/detail/detail.container.component';
import { ListContainerComponent } from './containers/list/list.container.component';

const routes: Routes = [
  {
    path: '',
    component: ListContainerComponent
  },
  {
    path: ':id',
    component: DetailContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
