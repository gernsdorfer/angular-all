import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'ui-lib-header',
  template: `
    <header>
      <ng-content select="ui-lib-header-item"></ng-content>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
