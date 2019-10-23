import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-lib-card-footer',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./card-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardFooterComponent {}
