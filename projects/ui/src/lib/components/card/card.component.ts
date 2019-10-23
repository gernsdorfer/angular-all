import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'ui-lib-card',
  template: `
    <div class="card">
      <div class="header">
        <ng-content select="ui-lib-card-header"></ng-content>
      </div>
      <div class="body">
        <ng-content select="ui-lib-card-body"></ng-content>
      </div>
      <div class="footer">
        <ng-content select="ui-lib-card-footer"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {}
