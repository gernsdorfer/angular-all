import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () =>
      import('./modules/books/books.module').then(
        ({ BooksModule }) => BooksModule
      )
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/static-pages/static-pages.module').then(
        ({ StaticPagesModule }) => StaticPagesModule
      )
  },
  {
    path: '**',
    redirectTo: '/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
