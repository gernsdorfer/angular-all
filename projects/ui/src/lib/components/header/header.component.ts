import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-ui-header',
  template: `
    <h1>
      <ng-content></ng-content>
    </h1>
    <hr />
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
