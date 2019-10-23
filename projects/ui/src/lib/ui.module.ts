import { NgModule } from '@angular/core';
import { HeaderComponent, LoaderComponent } from './components';
import { CommonModule } from '@angular/common';
import { HeaderItemComponent } from './components/header/header-item/header-item.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { CardBodyComponent } from './components/card/card-body/card-body.component';
import { CardFooterComponent } from './components/card/card-footer/card-footer.component';
import { ItemComponent } from './components/list/item/item.component';
import { ImageComponent } from './components/image/image.component';
import { ListComponent } from './components/list/list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NextComponent } from './components/pagination/next/next.component';
import { PrevComponent } from './components/pagination/prev/prev.component';
import { PagesComponent } from './components/pagination/pages/pages.component';
import { ItemsPerPageComponent } from './components/pagination/items-per-page/items-per-page.component';

@NgModule({
  declarations: [
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    CardHeaderComponent,
    HeaderComponent,
    HeaderItemComponent,
    ImageComponent,
    ItemComponent,
    ItemsPerPageComponent,
    ListComponent,
    LoaderComponent,
    NextComponent,
    PagesComponent,
    PaginationComponent,
    PrevComponent
  ],
  imports: [CommonModule],
  exports: [
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    CardHeaderComponent,
    HeaderComponent,
    HeaderItemComponent,
    ImageComponent,
    ItemComponent,
    ItemsPerPageComponent,
    ListComponent,
    LoaderComponent,
    NextComponent,
    PagesComponent,
    PaginationComponent,
    PrevComponent
  ]
})
export class UiModule {}
