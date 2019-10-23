import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-lib-card-header',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./card-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent {}
