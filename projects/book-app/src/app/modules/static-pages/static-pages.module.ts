import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [CommonModule, StaticPagesRoutingModule]
})
export class StaticPagesModule {}
