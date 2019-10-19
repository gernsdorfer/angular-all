import { NgModule } from '@angular/core';
import { HeaderComponent, LoaderComponent } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, LoaderComponent]
})
export class UiModule {}
