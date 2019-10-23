import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-lib-pagination-items-per-page',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./items-per-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsPerPageComponent {}
