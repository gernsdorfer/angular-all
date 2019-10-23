import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-lib-pagination-pages',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesComponent {}
