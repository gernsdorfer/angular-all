import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-lib-list-item',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {}
