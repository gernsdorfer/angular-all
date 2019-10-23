import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'ui-lib-list',
  template: `
    <div class="list">
      <ng-content select="ui-lib-list-item"></ng-content>
    </div>
  `,
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {}
