import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-lib-pagination-next',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./next.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextComponent {}
