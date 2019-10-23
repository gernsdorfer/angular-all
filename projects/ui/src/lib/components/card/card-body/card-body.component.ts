import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-lib-card-body',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./card-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBodyComponent {}
