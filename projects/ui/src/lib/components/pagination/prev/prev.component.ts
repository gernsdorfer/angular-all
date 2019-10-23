import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-lib-pagination-prev',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./prev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrevComponent {}
